---

title: Analysis
date: 2023-04-12 09:00 UTC
tags: articles

---

Analysis of Service Options
----------------------------

- You can find the code repo [here](https://github.com/seocahill/maightro), it has an [unlicense](https://github.com/seocahill/maightro/blob/main/LICENSE).
- [Go here](/results.html) to skip straight to the statistical data for each algorithm.

### General overview

If you are reading this and are technically inclined you’ll know from your algorithm book of choice that scheduling is one of the canonical examples of an [NP hard problem](https://en.wikipedia.org/wiki/NP-hardness).

In the wild, if your research this, common approaches include the following:

*   Using Mathematical programming, for example [ILP](https://en.wikipedia.org/wiki/Integer_programming) as demonstrated in this [job shop scheduling problem project](https://python-mip.readthedocs.io/en/latest/examples.html)
*   Heuristics, for example [genetic algorithms](https://en.wikipedia.org/wiki/Genetic_algorithm), as demonstrated in this [python example](https://github.com/akazuko/timetable_scheduler)
*   Simulation, as used by SBB's [Opentrack](http://www.opentrack.ch/opentrack/opentrack_e/opentrack_e.html) library.

The particular genus of the scheduling problem that Maytró presents, Single track scheduling, is solved with algorithms that feature common inputs like blocks (spaces between stations upon which only one train can be scheduled) and certain assumptions that trains can cross at stations not always the case in our specific example unfortunately).

Below is an example space time diagram that is typically used to help visualize the problem [1](#fn1).

![space time diagram for train scheduling on single track](https://d3i71xaburhd42.cloudfront.net/868a9cb615872c8cfbfcdb9c9145eb22095afb9d/5-Figure1-1.png)

- The nodes, S<sub>n</sub>, are stations
- The vertices, F<sub>(x,y)</sub>, are blocks (think a single track stretch between two stations)
- The vertical axis represents time moving forward.
- Each sloping line is a train occupying a block in time.

In order to create a valid schedule, sloping lines within a block can’t intersect.

### Scheduling Maytró

The particular problem my code seeks to solve is the scheduling of as many trains as feasible given normal domain constraints (blocks, rolling stock) on three intersecting routes:

*   The Nephin: Ballina - Westport
*   The Covey: Westport - Ballyhaunis
*   The Costello: Ballyhaunis - Ballina

Scenario specific constraints also apply (there are four different scenarios, the baseline being the current service).

The most obvious brute force approach is simply to cycle through every scheduling option, something like (pseudocode)

```ruby
      schedule = []
      blocks = list_single_track_sections
      queue = ordered_trains_waiting_to_enter_first_block
      while queue do
         train = trains.pop
         block = next_block(current_station, blocks)
         if block.empty?
            block.train = train
            schedule << train
         else
            trains << train
         end
      end
      return schedule
```

The former example is superficially similar to the algorithmic approach I take but instead of trying to schedule all trains per open block I optimize for connections, applying approximate calculations (heuristics) to avoid unnecessary cycles. This is a typical way to tackle a problem like this and produces what are referred to as 'greedy' algorithms:

> [A greedy algorithm is an algorithmic paradigm that follows the problem-solving heuristic of making the locally optimal choice at each stage with the hope of finding a global optimum.](https://en.wikipedia.org/wiki/Greedy_algorithm)
> -- <cite>[from Wikipedia]</cite>

My goal is to demonstrate that using available resources, given a certain scenario, trains _could_ be scheduled a lot better. The goal is not to find the optimum scheduling possible or indeed to verify that. I have accepted the general constraint that rescheduling existing trains (excepting in a very limited way for option 2) would render any putative solution infeasible. This trade off basically rules out an optimal solution.

### Scenarios

The baseline is just the current service and I look that up directly from Iarnród Éireann’s public (but not published) api, that serves their website. This means of course my implementation could and probably will break in the future but given the time I was willing to give this, the easiest thing was to query directly. I coded this initially as a basic cli, you can look up any route.

```ascii
   $rescue models/scenarios/option_3.rb 20221222 Claremorris Castlebar
   +-------------------------------------------------------------------+
   |                            An Maytró                            |
   +-------------+-----------+-------+-------+---------------+---------+
   | from        | to        | dep   | arr   | info          | trip_id |
   +-------------+-----------+-------+-------+---------------+---------+
   | Claremorris | Castlebar | 06:09 | 06:28 |               | LCX-0   |
   +-------------+-----------+-------+-------+---------------+---------+
   | Claremorris | Castlebar | 08:18 | 08:38 | to Westport   | C-0     |
   +-------------+-----------+-------+-------+---------------+---------+
   | Claremorris | Castlebar | 10:19 | 10:39 | to Westport;  | C-1     |
   +-------------+-----------+-------+-------+---------------+---------+
   | Claremorris | Castlebar | 12:04 | 12:23 |               | LCX-2   |
   +-------------+-----------+-------+-------+---------------+---------+
   | Claremorris | Castlebar | 14:04 | 14:23 |               | LCX-4   |
   +-------------+-----------+-------+-------+---------------+---------+
   | Claremorris | Castlebar | 15:20 | 15:40 | to Westport   | C-2     |
   +-------------+-----------+-------+-------+---------------+---------+
   | Claremorris | Castlebar | 17:19 | 17:39 | to Westport   | C-3     |
   +-------------+-----------+-------+-------+---------------+---------+
   | Claremorris | Castlebar | 19:13 | 19:32 |               | LCX-6   |
   +-------------+-----------+-------+-------+---------------+---------+
   | Claremorris | Castlebar | 20:49 | 21:09 | to Westport   | C-4     |
   +-------------+-----------+-------+-------+---------------+---------+
   | Claremorris | Castlebar | 22:34 | 22:53 |               | LCX-8   |
   +-------------+-----------+-------+-------+---------------+---------+
   | Claremorris | Castlebar | 23:59 | 00:18 |               | LCL-10  |
   +-------------+-----------+-------+-------+---------------+---------+
```

The realtime data is the source of all the constants - block durations, turnaround times, station dwell - used to generate schedules in the following scenarios.

#### Options 1a

One of the problems with the current Maytró is that about half of the trains between Westport and Ballina are unusable due to lousy connections between them. The “improved” scenario (option 1a) first schedules connecting Ballina Manulla trains (Nephin) relative to the time they connect to Dublin - Westport Intercity trains (Covey hereafter). Then next part of the algorithm checks for block conflicts between the current and next schedule trains and attempts to reschedule the next train.

This scenario has one major limitation. Ideally when rescheduling, a check would be run to make sure a suitable path is available for all affected blocks, in this case I haven’t done it for the following reasons:

*   Covey trains feed into the busiest section of the rail network (Portarlington - Dublin) and various shared tributaries of single track. Checking the rescheduled train can pass existing trains would be non-trivial
*   It turns out the algorithm only needs to reschedule a single Covey train to achieve acceptable results
*   This option is not my preferred solution, it’s inferior to Option 2.

Incidentally I did supply an approximation of the results of this exercise as a submission to the new timetable consultation without success or acknowledgement.

#### Option 2

This is essentially the original “Mayolink” proposal reheated. The approach is to start with the earliest Covey connection and schedule as many Nephin trains as possible until midnight, making sure to keep current connections to and from Dublin. The main difference is that the Nephin railcar runs through to Westport, as opposed to requiring a change. It’s well documented that changing mode extracts a significant penalty in terms of public transport usage, so avoiding it if possible is key to providing a good service.

The scheduling optimizations applied are as follows:

*   Add train if time to schedule a full trip from current point to end point and still hit next connection
*   If full trip not feasible, try shortened trip (i.e. stop at Castlebar)
*   If through trip not possible, return to destination (same service as baseline)

One limitation is that the station layout at Manulla, the junction of the lines, doesn’t have proper crossover facilities. In other words trains can pass each other but depending on the direction travelled an awkward maneuver is required. Could be easily fixed by the installation of a points. Not a deal-breaker either way but worth mentioning.

#### Option 3

This introduces 15 minute Westport’s Eastern line, referred to here as the Costello.

The approach is to schedule as many trips as are feasible using a newly introduced railcar (the Costello) to run between Claremorris and Westport, connecting with Nephin trains, thus creating unified Maytró service with optimal connections to all towns.

The scheduling optimizations applied are as follows:

*   if railcar is in the wrong place (for next connection) run it back
*   if connection possible, make the connection
*   otherwise just schedule an extra Costello service with no connection.

#### Option 3b

For option3b the Costello is extended all the way to the border, Ballyhaunis town.

The only optimization here (if you can call it that) is to check if the extension causes a scheduling clash and to remove the train if it does.

A proper approach would have been to introduce an extra block (Ballyhaunis - Claremorris) and schedule from scratch factoring in the passing possibilities therein. The approach here is likely not optimal but still a significant improvement on the status quo.

#### Option 4

The missing algorithm! This would be the optimal solution aka "Switzerland". Sadly I don't, as of writing, have the free time to investigate this option. It would involve:

- Adding back route flexibility that has been removed over the years, i.e. passing loops at each station.
- Bringing average speeds into line with European standards for regional rail.
- Scheduling trains to optimal frequency, given the geography of the line.

As a very rough rule of thumb, accepting that the former improvements were made, one could assume the longest block (Foxford to Castlebar) to take about 10 minutes to traverse and all blocks to be roughly equal in length. In such a scenario a headway of ~20 minutes would be theoretically possible, even on a single track.

### Comparison of Algorithms

You can further analyse the aforementioned algorithms via an interactive interface [here](/results.html)

* * *

1.  _1\. Single Track Train Scheduling, Jonas Harbering · Abhiram Ranade · Marie Schmidt (January 2015)_
