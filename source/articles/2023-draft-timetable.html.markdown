---

title: 2023-draft-timetable
date: 2023-09-27 10:49 UTC
tags:

---


## Public Consultation Feedback on Proposed timetable changes from 10th December 2023

The full list of changes can be found [here](https://www.irishrail.ie/en-ie/train-timetables/Proposed-timetable-changes-from-10th-December-2023)

Relevant to this proposal are:

- Additional 16:20hrs Westport to Athlone and 21:08hrs Athlone to Westport service daily (Monday to Saturday), providing connections to/from Dublin Heuston at Athlone.
- Connection from/to Ballina to the new 21:08hrs Athlone to Westport above.
- A number of other minor schedule alterations to improve punctuality (e.g. the 18:20 ex-Westport now 18:15)
- No connection is provided to the 16:20hrs ex Westport service even though the necessary paths exist to do so.

## Improved timetable

The code can be found [here](https://github.com/seocahill/maightro/blob/main/models/scenarios/option_1b.rb)

Running the new timetable through the improved algorithm yields this:

| From    | To       | Dep   | Arr   | Cost  | Dur     | Notes                 | Id  |
|---------|----------|-------|-------|-------|---------|-----------------------|-----|
| Ballina | Westport | 08:05 | 08:56 | €7.65 | 51 mins | advanced by 1.0 mins  | C-0 |
| Ballina | Westport | 10:35 | 11:26 | €7.65 | 51 mins | advanced by 30.0 mins | C-1 |
| Ballina | Westport | 15:07 | 15:58 | €7.65 | 51 mins | to Westport           | C-2 |
| Ballina | Westport | 17:07 | 17:58 | €7.65 | 51 mins | advanced by 2.0 mins  | C-3 |
| Ballina | Westport | 20:35 | 21:26 | €7.65 | 51 mins | to Westport           | C-4 |
| Ballina | Westport | 22:02 | 22:53 | €7.65 | 51 mins | to Westport           | C-X |

| From     | To      | Dep   | Arr   | Cost  | Dur     | Notes             | Id  |
|----------|---------|-------|-------|-------|---------|-------------------|-----|
| Westport | Ballina | 05:15 | 06:02 | €7.65 | 47 mins | to Dublin Heuston | R-5 |
| Westport | Ballina | 07:15 | 08:02 | €7.65 | 47 mins | to Dublin Heuston | R-6 |
| Westport | Ballina | 09:45 | 10:32 | €7.65 | 47 mins | to Dublin Heuston | R-7 |
| Westport | Ballina | 13:10 | 13:57 | €7.65 | 47 mins | to Dublin Heuston | R-8 |
| Westport | Ballina | 16:20 | 17:04 | €7.65 | 44 mins | to Dublin Heuston | R-X |
| Westport | Ballina | 18:20 | 19:06 | €7.65 | 46 mins | to Dublin Heuston | R-9 |

Looks pretty good! The actual draft timetable is below for comparison.

<object data="https://www.irishrail.ie/getmedia/d57bb37e-9dda-4227-9185-6cd38717d149/0610-DubGalwyWportDub_v1.pdf" type="application/pdf" width="100%" height="400px">
  <p><a target="_blank" href="https://www.irishrail.ie/getmedia/d57bb37e-9dda-4227-9185-6cd38717d149/0610-DubGalwyWportDub_v1.pdf">Unable to render pdf, click to view draft timetable</a></p>
</object>

Notes:

- I assume no freight conflicts which in any case are always soluble as not time sensitive.
- Likewise staffing isn't considered an issue as the overall hours of operation don't change.
- Sunday not considered as no changes are proposed.

## The key change

The key to unlocking these improvements is a single problematic weekday train, **the 9:10 ex Athlone to Westport**.

In order to smooth out current timetable issues the algorithm delays the departure of the train by 30 minutes. Since this would cause the Dublin Galway connection to be missed the answer is to start the train in Heuston, departing 08:05 (i.e. 30 minutes after the Galway train)*

**Coincidentally this was the old departure time to Westport on weekdays, as you will see below. Compared to 2008 overall trip time is almost 25 minutes faster but connections are much worse.*

<object data="https://web.archive.org/web/20100702043048/http://www.irishrail.ie:80/your_journey/printed_timetable_pdfs/2008/Dublin%20Westport%2008.pdf" width="100%" height="400px">
  <p><a target="_blank" href="https://web.archive.org/web/20100702043048/http://www.irishrail.ie:80/your_journey/printed_timetable_pdfs/2008/Dublin%20Westport%2008.pdf">Unable to render pdf, click to view old timetable</a></p>
</object>

With this single tweak in place, the Ballina shuttle can provide a full integration to all trains, with fast connections to and from both Westport and Dublin as shown.

I haven't performed any programmatic testing to confirm this change is feasible (due to time constraints and incomplete data) but the following is true at least:

- As the existing crossover with the morning train happens in Athlone, the new crossing point would be in Tullamore and shouldn't pose any issues.
- The train would depart a half hour after the current connection to Galway which is assumed feasible as later Athlone services run with 30 minutes headways between them.
- No other Intercity service appears to be currently scheduled at this time on the main trunk route to Portarlington.
- Until around 2010 a direct train to Westport left in this exact window. Given the timeframe, its cancellation was likely due to the imposition of austerity and not for any logical reason.

I think therefore, it's reasonable to assume that there is no insurmountable barrier to restoring this service. The 20% of local trains run in Mayo that are currently unusable due to poor connections could then be rescheduled to become viable for the public.

## Late weekend only service

Unrelated to the above, I've also asked for a single late night service at the weekend to be provided to facilitate movement around the Mayo towns and to improve Mayo's social offering. The policy reference here is the Night Time Economy Commission's Report which was adopted in the last program for Government, especially the section dealing with the lack of public transport in urban and rural areas.

A template for this service would be the special trains laid on at short notice for the Biden visit. Essentially a train each leaving Ballina and Westport at night, meeting in Manulla and returning back the way they came. This would allow travel home from the big towns in all directions and would be a major help in terms of facilitating late night socializing in Mayo. Trains are already stabled in both stations at night, so the rolling stock is there. The night service potentially requires extra staff hours but the commitment would be very small, just a couple of extra hours per week.

## A note on the process

Railways are a public good, so the public should certainly have a say in how services are run. In this context it's great that IÉ are consulting the public but the process still feels a little bit like a black box. The current response is as follows:

> Thank you for taking the time to submit your comments and suggestions to Iarnród Éireann regarding the proposed timetable changes from December 2023.
Iarnród Éireann and the National Transport Authority will review all suggestions received.
Suggested alterations which cannot be implemented at this timetable change will be retained in a database for consideration at future timetable reviews.

Feedback as to why suggestions are rejected is essential, if for no other reason to allow interested parties to attempt to iterate and find solutions. Given the likely quite low volume of submissions, it should be possible. A public register of submissions and responses would also be welcome.