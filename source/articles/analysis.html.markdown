---

title: Analysis
date: 2023-04-12 20:25 UTC
tags: articles

---

# Analysis

Repo here https://github.com/seocahill/maightro, accepting PRs especially aesthetically minded, I last did frontend dev in 2014! Released under [unlicense](https://github.com/seocahill/maightro/blob/main/LICENSE)

### Overview

If you are reading this and are technically minded you'll know from your algorithm book of choice that scheduling is one of the canonical examples of an NP hard problem.

In the wild, if your research this,  common approaches include:
- mathematical programming e.g. ILP [job shop scheduling problem python](https://python-mip.readthedocs.io/en/latest/examples.html)
- heuristics (e.g. genetic algorithms [python example](https://github.com/akazuko/timetable_scheduler))
- simulation http://www.opentrack.ch/opentrack/opentrack_e/opentrack_e.html

This particular genus of the scheduling problem, Single track scheduling, is solved with algorithms that feature common inputs like blocks (spaces between stations upon which only one train can be scheduled) and certain assumptions that trains can cross at stations not always the case in our specific example unfortunately).

Below is a space time diagram to help visualize this [^1].  The nodes are stations, the vertices are blocks (think a single track stretch), the vertical axis represents time moving forward.  Each sloping line is a train occupying a block in time. In order to schedule validly, sloping lines within a block can't intersect.

![space time diagram for train scheduling on single track](https://d3i71xaburhd42.cloudfront.net/868a9cb615872c8cfbfcdb9c9145eb22095afb9d/5-Figure1-1.png)


The particular problem this code seeks to solve is the scheduling of as many trains as feasible given normal domain constraints (blocks, rolling stock) on three intersecting routes...
- the Nephin: Ballina - Westport
- the Covey: Westport - Ballyhaunis
- the Costello: Ballyhaunis - Ballina.
....and scenario specific constraints (there are four different scenarios, the baseline being the current service).

The most obvious brute force approach is simply to cycle through every scheduling option, something like (pseudo)...

```
schedule = []
blocks = single trains sections
queue = array of ordered trains waiting to enter first block
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
return schedule.
```


This is kind of the approach I take but with some shortcuts to avoid unnecessary cycles, i.e something approximating a greedy algorithmic approach:

>  A greedy algorithm is an algorithmic paradigm that follows the problem-solving heuristic of making the locally optimal choice at each stage with the hope of finding a global optimum.

My goal really is to demonstrate that using available resources, given a certain scenario, trains *could* be scheduled a lot better. As opposed to finding the optimum scheduling possible or indeed verifying that.

This approach also makes sense as I (generally, the exception being scenario 2) have give myself the constraint that I can't reschedule already scheduled trains in order to make realising some version of Maytró as feasible as possible.

### Scenarios

The baseline is just the current service and I look that up directly from Iarnród Éireann's  public (but not published) api, that serves their website.  This means of course my implementation could and probably will break in the future but given the time I was willing to give this, the easiest thing was to query directly.  I coded this initially as a basic cli, you can look up any route.

![[Screen Shot 2023-01-14 at 12.12.26 AM.png]]


The realtime data is the source of all the constants - block durations, turnaround times, station dwell - used to generate schedules in the following scenarios.

#### Options 1a

One of the problems with the current Maytró is that about half of the trains between Westport and Ballina are unusable due to lousy connections between  them.  The "improved" scenario (option 1a)  first schedules connecting Ballina Manulla trains (Nephin) relative to the time they connect to Dublin - Westport Intercity trains (Covey hereafter).  Then next part of the algorithm checks for block conflicts between the current and next schedule trains and attempts to reschedule the next train.

This scenario has one major limitation. Ideally when rescheduling, a check would be run to make sure a suitable path is available for all affected blocks, in this case I haven't done it for the following reasons:
- Covey trains feed into the busiest section of the rail network (Portarlington - Dublin) and various shared tributaries of single track.  Checking the rescheduled train can pass existing trains would be non-trivial and...
- It turns out the algorithm only needs to reschedule a single Covey train to achieve  acceptable results and...
- This option is not my preferred solution, it's inferior to Option 2.

It would be a nice challenge to go through some weekend.

Incidentally I did supply an approximation of the results of this exercise as a submission to the new timetable consultation without success or without even receiving what seems to be the new standard acknowledgement:

> IÉ in conjunction with the NTA will continue to investigate possibilities for implementation at a later stage
> Driver resources not available for implementation

#### Option 2

This is essentially the original "Mayolink" proposal reheated. The approach is to start with the earliest Covey connection and schedule as many Nephin trains as possible until midnight, making sure to keep current connections to and from Dublin.  The main difference is that the Nephin railcar runs through to Westport, as opposed to requiring a change.  It's well documented that changing mode extracts a significant penalty in terms of public transport usage, so avoiding it if possible is key to providing a good service.

The scheduling optimizations applied are as follows:
- Add train if time to schedule a full trip from current point to end point and still hit next connection
- If full trip not feasible, try shortened trip (i.e. stop at Castlebar)
- If through trip not possible, return to destination (same service as baseline)

One limitation is that the station layout at Manulla, the junction of the lines, doesn't have proper crossover facilities. In other words trains can pass each other but depending on the direction travelled an awkward maneuver is required.  Could be easily fixed by the installation of a points. Not a deal-breaker either way but worth mentioning.

#### Option 3

This introduces 15 minute Westport's Eastern line, referred to here as the Costello.

The approach is to schedule as many trips as are feasible using a newly introduced railcar (the Costello) to run between Claremorris and Westport, connecting with Nephin trains, thus creating unified Maytró service with optimal connections to all towns.

The scheduling optimizations applied are as follows:
- if railcar is in the wrong place (for next connection) run it back
- if connection possible, make the connection
- otherwise just schedule an extra Costello service with no connection.

#### Option3b

For option3b the Costello is extended all the way to the border, Ballyhaunis town.

The only optimization here (if you can call it that) is to check if the extension causes a scheduling clash and to remove the train if it does.

A proper approach would have been to introduce an extra block (Ballyhaunis - Claremorris) and schedule from scratch factoring in the passing possibilities therein.  The approach here is likely not optimal but still a significant improvement on the status quo.

### Results

Listed below you'll find some statistics for each option, for each possible trip namely:
- number of trains scheduled (n)
- worst cast trip time (w)
- mean trip time (m)
- frequency of service (f)



[^1]: https://www.semanticscholar.org/paper/MISTA-2015-Single-Track-Train-Scheduling-Harbering-Ranade/868a9cb615872c8cfbfcdb9c9145eb22095afb9d