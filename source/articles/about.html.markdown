---

title: About
date: 2023-04-12 09:00 UTC
tags: articles

---

About Maytró
--------------

<img src="../images/map.svg">

“Maytró” (this website) is conceived to be both practical and aspirational. At heart it’s simply an online rail journey planner exclusively branded for Mayo. Its other purpose is to demonstrate concretely, how easy it would be to provide significantly more useful local rail services than those currently offered.

The name (apologies if obvious) is a combination of Mayo and metro and Maigh Eo agus méitreo i nGaeilge - "Maightreo" mar a thugaim air. The original project, the inspiration for this proposal, was called "Mayolink".

The actual service itself as mentioned [elsewhere](#history) has been going since 2007. “Phase 1” (let’s hopefully call it!) covers a grand total of 15 miles between Foxford and Ballina. There are eight trains each way, the first one leaving Ballina at 5:05 and the last one arriving back in Ballina 21:32. The interval between each train in either direction is about 2 hours on average. This makes it a more frequent service than any available in Limerick, Galway or Waterford, numbers three to five of Ireland’s most populous cities. It’s a glimpse of what the service could really be like, if it was operated in a way that sought to maximize available resources.

It is possible today to get as far as Westport but the service is an afterthought to say the least. There are a handful of viable connections each way, three in the evening from Ballina (none before 3pm) and a couple before lunch from Westport and one in the evening. The travel time is competitive but could be much better (50-55 mins or about 65 km/h on average), there is the penalty of a modal change (though the connection is guaranteed) and day returns are not really doable. It’s just about better than nothing but people do use it nevertheless. Even for something as simple as a Mayo match in Castlebar, it’s not really usable.

### Why I built this site

It was probably the following (excellent) tweet I spotted some time ago that first got me thinking about a local Mayo rail service again:

> Something we're discussing locally is the creation of a frequent, reliable rail service for Mayo. Three shuttle trains, meeting in Manulla, could provide an hourly service linking six towns (1/3 of Mayo's population). Don't be fooled by the name - we're serious about this. [#MART](https://twitter.com/hashtag/MART?src=hash&ref_src=twsrc%5Etfw) [pic.twitter.com/d1d7LW7rZu](https://t.co/d1d7LW7rZu)
>
> — 15-Minute Westport (@15minWestport) [April 2, 2021](https://twitter.com/15minWestport/status/1377996729006616580?ref_src=twsrc%5Etfw)

Then a few months after I attended the Ballina-Westport county football final, an incredibly frustrating day and not just because of the result! I witnessed hoards of people piling into town from both ends of the track in their cars (including myself and my uncle), clogging up Castlebar as happens on every match day, with the station lying idle and adjacent to McHale park. [The frustration of residents regarding the current arrangements is on record](https://www.mayonews.ie/news/38427-match-day-parking-a-nightmare-for-residents
) but I also thought of all the lost business for Castlebar. How nice it would be to have a pint or two before or after the match, maybe a bite to eat, to mingle and chat with other fans on the train. Instead matchday is all about the car: the search for parking; the rush up; trying to beat the traffic out of town and finally the tiring drive home, sometimes in dangerous weather conditions. Stress and haste - not the day out it should be.

Leaving with our tail between our legs we passed the building site of the new bypass of the original bypass of Castlebar, a motorway terminating in Westport. I struggled to find any logical reasoning for this project. What will happen to the extra traffic when it reaches Westport? Is a motorway build (current cost estimate 350m euro) really justified? What lessons have been learned from the previous, failed Castlebar bypass? Was a public transport option considered by the NTA before greenlighting? How will it contribute to the legally mandated reduction in private transport emmissions?

Perhaps this was the final motivation required to build the Maytró site, that is to raise awareness of alternative approaches to solving Mayo's transport problems, solutions that leverage existing, under-utilised infrastructure.

<h3 id="how-it-works">How it works</h3>

For a deeper dive into the code you can [check this page out](/articles/analysis.html) but here’s a quick non-technical overview. All train data is pulled from the same source as the irishrail website/app. On top of that I offer 5 different “flavours” of maytró to choose from. The approach is to start with existing services and progressively enhance them, using available resources.

*   Option 1 is simply the status quo, just presented to you in a more Mayo-centric fashion. You can use this as you would irishrail.ie.
*   Option 2 improves on the status quo by shifting trains around to make better connections so all trains are usable.
*   Options 3 optimizes the use of the Ballina railcar while keeping current connections to the Dublin trains. Generally trains between Ballina and Westport are direct. Some trains only go to Castlebar, due to timing constraints. I schedule trains starting with the first real morning train and going until midnight.
*   Option 4 adds a fictional extra railcar starting from Claremorris (inspired by the 15 minutes Westport group tweet) to complete the Maytró network! The idea here is to run it up and down to Westport while connecting to Ballina trains as much as possible given the constraints of existing real trains.
*   Option 5 is as above but extended to Ballyhaunis.

You can find a statistical analysis of each option [here.](/results.html) There are also some limitations to this current iteration worth mentioning:

*   I assume extra resources when needed for a particular option (staff, fuel, extra rolling stock etc) are simply available.
*   I haven’t specifically preserved paths for freight trains as I don’t have an information on scheduling.
*   The junction layout at Manulla is not optimal when two trains have to cross.
*   Some options have specific limitations, see page on [code](/articles/analysis.html#code) for more.

Having admitted the above, these limitations are trivial, taking into account the scope of the project itself. This is not metrolink.

### Policy

No public service will happen unless it is Government policy, and there is lots of relevant policy, past and present, squarely behind Maytró.

Starting with the recent past, [The National Spatial Strategy (2002 - 2022)](https://npf.ie/nss/) while by no means flawless, was the superior predecessor of the current National Planning Framework which will exacerbate already extreme centralization, to the benefit of no-one except the city rentiers. The NSS focused on redressing the imbalances of Dublin-centric unconstrained growth, fostering regional development by clustering smaller towns together to create something akin to city scale or a counter balance to prevailing centrifugal forces at least. Among the secondary ‘hubs’ identified was Ballina-Castlebar, a sociopolitical concept that sadly never got off the ground. As was the case with most of the putative hubs and gateways in the NSS, Dublin ate their lunch. Needless to say utilizing the idle railway between the two towns a bit better (or at all) might have helped to make a meaningful connection between the two something more than an aspiration. In conventional urban areas, after all, it is almost always the local genus of metro, that embodies both the real and symbolic nervous system connecting the disparate parts of the urban.

The [updated climate action plan](https://www.gov.ie/en/publication/7bd8c-climate-action-plan-2023/) is a low detail document with plenty of big figures, most relevant being percentage cuts in private transport emissions. Vague references are made to increased rail “in the cities” with the headline scheme that’s not in Dublin, being in Cork. Schemes that require hardhats, juicy private tenders and will happen in the future, if they do at all. Why not make use of existing rail resources to cut emissions tomorrow instead of in five years? Why do regions have to wait for “the cities” to get their act together? Maightro is better than a shovel-ready project as no shovel is required! People who live outside "the cities" would be less cynical about climate action plans if existing services were run in a way that could enable them to drive less. Maytró would be climate policy made climate action, something that is sorely needed.

Mayo county council is unequivocally in favour of Mayo commuter rail as outlined in [the Mayo County Development Plan 2022-2028](https://www.mayo.ie/planning/county-development-plans/2022-2028) which proposes, inter alia:

> To support and encourage the provision of a high-quality rail network and service (including commuter services) and ancillary works for passenger and freight carriage to, from and within the county, where it can be demonstrated that the development will not have significant adverse effects on the environment including the integrity of the Natura 2000 network.
> -- <cite>Policy MTP 19, p121</cite>

> To liaise with and encourage Iarnród Éireann to: (a) Continue investment in rail freight facilities at Ballina & Westport (existing) and Claremorris & Castlebar (as potential freight hubs). (b) Increase frequency of commuter services on the mainline rail network between Westport, Castlebar and Ballina.
> -- <cite>Objective MTO 18 p122</cite>

In this, their flagship policy document, Mayo county council accurately diagnose the problematic nature of the current service and prescribe a sensible and straightforward solution.

> The low frequency of current rail services in Mayo, renders rail travel an unviable transport option for daily commuters. Increased frequency of rail services and a greater integration of bus and rail services would provide for enhanced services and would facilitate the transfer from private car to bus and rail.

What a pity that in the hypercentralized, technocratically ruled society we live in today, there is no room for local politicians to directly deliver local services that would support national policy objectives.

The [Connecting Ireland Mobility Plan](https://www.nationaltransport.ie/connecting-ireland/) mandates local bus services for all towns with a population over 10,000. In countries with well functioning regional public transport, modes compliment each other creating a network effect as opposed to ignoring or "competing" against each other. The Maytró map thus includes bus transfer points at Ballina and Castlebar, necessary given the natural hinterland of the former and the spread out topography of the latter.

_Example local bus network for Ballina linking traditional satellite towns ranging in population from 500-2000 inhabitants. Ardnaree is the eastern shore of the town centre, the Quay is the main suburb. Tireragh and Tirawley are historical Túatha that extend from either side of the town._ ![Ballina local bus](ballina-bus.svg) _My attempt at an orbital bus line for Castlebar, starting and finishing at the railway station. [The Draft Castlebar Town Plan 7.9.1](https://consult.mayo.ie/en/consultation/draft-castlebar-town-environs-local-area-plan-2023-2029) contains details of two bus routes, one serving the train station on a circuitous route._ ![Castlebar local bus](Castlebar-bus-map.svg)

Another aspect of Maytró is the ambition to run early and late. Citizens should be able to use the service not just for daytime appointments but also for leisure and nocturnal entertainment. This is also consistent with current Government policy. The recent report from the [Night Time Economy Taskforce](https://www.gov.ie/en/publication/c1ba7-report-of-the-night-time-economy-taskforce/) (which the current government has committed to implement) speaks about “Public transport as an essential support for the NTE” and recommends “Additional Night-Time Economy services in rural areas”. An interesting thought experiment is to consider the difference between jumping on a train to go from a bar in one part of Berlin or London to a bar in another, a trip that could take 45 minutes or longer. Is there any reason why one wouldn't do the same in Mayo assuming Maytró existed, was similarly affordable and ran at night?

Which brings me onto the last policy document I want to refer to here: John Bradley’s excellent [“Economy of Mayo”](https://275314da-a8aa-42f3-b679-4f2bff339c95.filesusr.com/ugd/33065c_ab5dd92d603d4dac9b205634d153745e.pdf). EOM reflects on the intersection between the real economy in Mayo and the policy that frames it, challenging popular misconceptions with data based conclusions and offering insights into where improvements can be made. Chapter 8 “Towards a County Spatial & Economic Strategy”, is particularly salient in terms of some of the arguments I’ve made for Maytró. In it Dr. Bradley identifies public transport connectivity as...

> …’the best way to encourage the evolution of a new enterprise sector in Mayo… to link its smaller towns in such a way that the grouping takes on some of the functional characteristics of larger “virtual” towns…improvements will require imaginative and flexible policies and are likely to be relatively low cost when compared to the construction costs of motorways”.

There is much to say on this idea of a virtual city, or as I would think of it, the distributed urban, as a counterpoint to what I believe are anachronistic views on the benefits of urbanization and large cities, but I don’t want to digress from Maytró too much here. I’ll finish by mentioning a success marker Bradley highlights, namely “retaining existing young people in the county” and “attracting returning Mayo people to live and work in the county”. In other words people who migrate to the city. Cities are made up of villages and towns in the same way a county like Mayo is, and citizens love to find their village within the hive of the city. The difference between rural and urban villages is the level of connectivity and the convenience of it in particular, “the death of distance”, as Dr. Bradley refers to it.

Imagine how much more interesting Mayo would become to young people if nights out were not confined to your own, dreary town. With a well functioning Maytró each town would in effect become a “neighbourhood” - as the more exciting parts of cities are nowadays marketed - and could be explored if not a will then relatively cheaply and quickly. And what neighbourhoods they would be! These familiar yet distinctive clusters of homes, pubs, businesses, lanes, streets, squares and bridges. Situated on or separated by magnificent rivers, beaches, bays, lakes, forest and parkland. Quite a contrast from the unloved gray inbetweens of the ‘hip’ urban villages that city dwellers and easyjetters flock to. These built patterns that are truly alive if perhaps dormant, in sympathy with [_the timeless way of building_](https://en.wikipedia.org/wiki/The_Timeless_Way_of_Building), in juxtaposition to busy but dead places like Silicon Docks [and their ilk](https://waterfordnorthquays.ie/buildings/), the developer way of building.

Although this is purely an exercise in creative thinking the effect of imagining the same constitutive elements in a different context can be transformative in reality. As Bradley explains

> ‘The Wild Atlantic Way showed how better “framing” can produce extraordinary results without extraordinary expenditure.’

I propose that Maytró could have a similar transformative effect on the perception of our towns.

### Summation

Maytró is a simple idea that could be massively progressive for Mayo. Whether a matter of historical luck or perspicacious design, Mayo has been left with five of its six largest towns linked directly by rail. Up to half the county's population could be benefiting from high quality public transport. This would have a transformative effect on the collective perception of the county from within and without.

Maytró fits neatly into national and local policy frameworks both current and past. It requires little extra resourcing, it is rather about adopting a new mental model, defining new, heightened expectations around what level of service the Irish public can expect, outside Dublin.

While other regional cities are starting to talk about implementing local rail services (and that is both welcome and overdue), there is no reason why Mayo should have to wait at the back of the line. Mayo is ready to lead, this project is ready to go. The required investment is so negligible as to be not worth mentioning.

In my opinion it would be infinitely more beneficial for Mayo if its railways changed focus to knitting local urban settlements together into a whole (as happens in a traditional city) instead of delivering people to Dublin. The last number of decades has seen knowledge freed from physical centralization. This was followed during the pandemic by the distribution of the workplace, long delayed due to resistance from rentiers and the manager-worker power dynamic but finally born out of necessity. The dominance of a single location in Ireland is an anachronism historically and it makes no sense under our current social conditions, yet our thinking around public transport provision is still wired that way.

There is no reasonable obstacle to implementation of Maytró, which could be done almost immediately, [as the hastily convened arrangements for the visit of Joe Biden amply demonstrate](https://www.irishrail.ie/en-ie/news/President-Joe-Biden-visits-Ballina). If there's a will, there's a way.

Twenty years ago the original Mayo delegation comprising TDs, urban and county councillors, IRD members and others managed to win the grudging concession that is the current service today, a foot in the door, if you will. I’m sure if such a delegation could be put together today to push the project forward again it would find a much more favourable reception.