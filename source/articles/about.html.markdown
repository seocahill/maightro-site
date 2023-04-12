---

title: About
date: 2023-04-12 09:00 UTC
tags: articles

---

### What is Maytró

"Maytrò" (this website) is conceived to be both practical and aspirational. At heart it's simply an online journey planner exclusively branded for Mayo people. It should help you to get around Mayo today but also to show concretely how easy it would be to provide a service that was infinitely better than what's currently offered.

The actual service itself as mentioned [elsewhere](#history) has been going since 2007. "Phase 1" (let's hopefully call it!)  covers a grand total of 15 miles between Foxford and Ballina. There are eight trains each way, the first one leaving Ballina at 5:05 and the last one arriving back in Ballina 21:32.  The interval between each train in either direction is about 2 hours on average.  This makes it a more frequent service than any available in Derry, Limerick, Galway or Waterford, numbers four to seven of Ireland's most populous cities.  It's a glimpse of what the service could really be like, if it was operated in a way that sought to maximize available resources.

It is possible today to get as far as Westport but the service is an afterthought to say the least.  There are a handful of viable connections each way, three in the evening from Ballina (none before 3pm) and a couple before lunch from Westport and one in the evening.  The travel time is competitive but could be much better (50-55 mins), there is the penalty of a modal change (though the connection is guaranteed) and day returns are not really doable. It's just about better than nothing but people do use it nevertheless. Even for something as simple as a Mayo match in Castlebar, it's not really usable.

### Why I built this site.

Well for one thing it was Christmas and I had time on my hands but it was probably the following (excellent) tweet I spotted some time ago that first got me thinking about it again:

`<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Something we&#39;re discussing locally is the creation of a frequent, reliable rail service for Mayo. Three shuttle trains, meeting in Manulla, could provide an hourly service linking six towns (1/3 of Mayo&#39;s population). Don&#39;t be fooled by the name - we&#39;re serious about this. <a href="https://twitter.com/hashtag/MART?src=hash&amp;ref_src=twsrc%5Etfw">#MART</a> <a href="https://t.co/d1d7LW7rZu">pic.twitter.com/d1d7LW7rZu</a></p>&mdash; 15-Minute Westport (@15minWestport) <a href="https://twitter.com/15minWestport/status/1377996729006616580?ref_src=twsrc%5Etfw">April 2, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`

A few months back I attended the Ballina-Westport county final and it was an incredibly frustrating feeling, not just because of the result! Hoards of people piling in from both ends of the track in their cars (including myself and my uncle), clogging up Castlebar as happens on every match day, spoiling it for residents, the station lying idle and adjacent to McHale park.  The frustration of residents is on record but I also thought of all the lost business for Castlebar, how nice it would be to have a pint or two before or after the match (depending on if you win or lose!) and maybe a bite to eat, mingle with other fans on the train. Instead matchday is about the car, the search for parking, the driving home when you're tired, trying to beat the traffic, the weather.

Leaving Castlebar with our tail between our legs we passed the building site of the bypass of the original bypass, a motorway between Castlebar and Westport. What can you say about that in 2023.  I'll say no more except that it motivated me to attempt to revive the Maightó idea.

### How it works

For a deeper dive into the code you can [check this page out](#code) but here's a quick non-technical overview:
- All train data is pulled from the same source as the irishrail website/app.  On top of that I offer 5 different "flavours" of maytró to choose from:
- Option 1 is simply the status quo, just presented to you in a more Mayo-centric fashion. You can use this as you would irishrail.ie.
- Option 2 improves on the status quo by shifting trains around to make better connections so all trains are usable.
- Options 3 optimizes the use of the Ballina railcar while keeping current connections to the Dublin trains. Generally trains between Ballina and Westport are direct.  Some trains only go to Castlebar, due to timing constraints.  I schedule trains starting with the first real morning train and going until midnight.
- Option 4 adds a fictional extra railcar starting from Claremorris (inspired by Westport cycle group tweet) to complete the Maytró network!  The idea here is to run it up and down to Westport while connecting to Ballina trains as much as possible given the constraints of existing real trains.
- Option 5 is as above but extended to Ballyhaunis.

There are also some limitations to this current iteration worth mentioning:
- I assume extra resources when needed for a particular option (staff, fuel, extra rolling stock etc) are simply available.
- I haven't specifically preserved paths for freight trains as I don't have an information on scheduling.
- The junction layout at Manulla is not optimal when two trains have to cross (it's possible but awkward).
- Some options have specific limitations, see page on [code](#code) for more.

Having admitted the above, these limitations are trivial, taking into account the scope of the project itself.  This is not metrolink.


### Why the Maightró should happen

No public service will happen unless it is Government policy, and there is a lots of relevant policy, past and present, squarely behind Maytró.

Starting with the recent past, [The National Spatial Strategy (2002 - 2022)](https://npf.ie/nss/) while by no means flawless, was the superior predecessor of the current National Planning Framework which will exacerbate already extreme centralization, to the benefit of no-one except the city rentiers.  The NSS focused on redressing the imbalances of Dublin-centric unconstrained growth, fostering regional development by clustering smaller towns together to create something akin to city scale or a counter balance to prevailing centrifugal forces at least.  Among the secondary 'hubs' identified was Ballina-Castlebar.  BellinBar (or is it CashelNah?) never got off the ground. As was the case with most of the putative hubs and gateways in the NSS, Dublin ate their lunch. Needless to say utilizing the idle railway between the two towns a bit better (or at all) might have helped to make a meaningful connection between the two something more than an aspiration. In conventional urban areas, after all, it is almost always the local genus of metro, that embodies both the real and symbolic nervous system connecting the disparate parts of the urban.

The [updated climate action plan](https://www.gov.ie/en/publication/7bd8c-climate-action-plan-2023/) is a low detail document with plenty of big figures, most relevant being percentage cuts in private transport emissions.  Vague references are made to increased rail "in the cities" with the headline scheme that's not in Dublin, being in Cork.  Everything must defer to McKinsey, the strategic rail report, almost twenty years after the last. Schemes that require hardhats, juicy private tenders and will happen in the future, if they do at all.  Why not make use of existing rail resources to cut emissions tomorrow instead of in five years?  Why do regions have to wait for "the cities" to get their act together?  Maightro is better than a  "shovel-ready" project as no shovel is required!   "Rural people"  would be less cynical about climate action plans if existing services were run in a way that could enable them to drive less.  Maightró would be climate policy made climate action, something that is sorely needed, especially outside "the cities".

The connecting Ireland mobility plan mandates local bus services for all towns with a population over 10,000. In counties with well functioning regional public transport, modes compliment each other creating a network effect as opposed to 'competing' against each other in fantasy markets.  The Maightró map thus includes bus transfer points at Ballina and Castlebar, necessary given the natural hinterland of the former and the spread out topography of the latter.

Ballina illustrate local bus networking show traditional satellite towns of Killala , Bonniconlon, Crossmolina (10th largest in Mayo) and Enniscrone (7th largest in Sligo and most populous here having a population of about 2.5k). Ardnaree is the eastern shore of the town centre, the quay is the main suburb. Tiereragh and Tirawley are historical Tuatha that extend from either side of the town.

![[Ballina%20bus%20lines.svg]]

Castlebar illustated "circle" bus line, starting and finishing at the railway station.  I'm not a native so this is just a stab. I'm sure a local could make a lot better fist of this (link).
![[Castlebar%20local%20bus%20loop.svg]]


Another aspect of Maytró is the ambition to run early and late. Citizens should be able to use the service not just for daytime appointments but also for leisure and nocturnal entertainment.  This is also consistent with current Government policy.  The  recent report from the Night time economy taskforce (which the current government has committed to implement) speaks bout "Public transport as an essential support for the NTE" and recommends "Additional Night-Time Economy services in rural areas".

An interesting thought experiment is to consider the difference between jumping on a train to go from a bar in one part of Berlin or London to a bar in another, a trip that could take 45 minutes or longer.  Is there any reason why one couldn't do the same in Mayo (assuming Maightró existed, was similarly affordable and ran at night)?

Which brings me onto the last policy document I want to refer to here: John Bradley's excellent ["Economy of Mayo"](https://275314da-a8aa-42f3-b679-4f2bff339c95.filesusr.com/ugd/33065c_ab5dd92d603d4dac9b205634d153745e.pdf).  EOM is full of sage reflection on the intersection between the real economy in Mayo and the policy that frames it, challenging popular misconceptions and offering insights into where improvements can be made.  Chapter 8 "Towards a County Spatial & Economic Strategy",  is particularly salient in terms of some of the  arguments I've made for Maightró. In it Dr. Bradley identifies public transport connectivity as ...'the best way to encourage the evolution of a new enterprise sector in Mayo... to link its smaller towns in such a way that the grouping takes on some of the functional characteristics of larger "virtual" towns...improvements will require imaginative and flexible policies and are likely to be relatively low cost when compared to the construction costs of motorways".

There is much to say on this idea of a virtual city, or as I would think of it, the distributed urban, as a counterpoint to what I believe are anachronistic views on the benefits of urbanization  and large cities, especially when data is not to location. We were told for years that the serindipity of offices cooler meetings and other such nonsense necessitated the commute to the centre until covid blue that bullshit out of the water.  Cities are awaiting their covid shock but I don't want to digress from Maightró too much here. I'll finish by mentioning a success marker Bradley highlights, namely "retaining existing young people in the county" and "attracting returning Mayo people to live and work in the county".  In other words people who migrate to the city.  Cities are made up of villages and towns in the same way a county like Mayo is, and citizens love to find their village within the hive of the city.  The difference between rural and urban villages is the level of connectivity and the convenience of it in particular, "the death of distance", as Dr. Bradley refers to it.

Imagine how much interesting Mayo would become to young people if nights out were not confined to your own, dreary town. With a well functioning Maytró each town would in effect became a "neighbourhood" - as the more exciting parts of cities are nowadays marketed as - and could be explored if not a will then relatively cheaply and quickly.  And what neighbourhoods they are, each familiar yet distinctive cluster of homes, businesses, lanes, streets, squares, bridges, each on or adjacent to magnificent rivers, beaches, bays, lakes, forest and parkland.  Quite a difference from the gray inbetweens of the 'hip' urban villages that city dwellers and easyjetters flock to each weekend.

Although this is purely an exercise in creative thinking the effect of imagining the same constitutive elements in a different context can be transformative, or as Bradly puts it - 'The Wild Atlantic Way showed how better "framing" can produce extraordinary results without extraordinary expenditure.'  I propose that the Maightró could have a similar transformative effect on the perception of our towns.


### Summing  up

Maightró is a simple idea that could be massively progressive for Mayo.  Whether a matter of historical luck or perspicacious design, Mayo has been left with five of its six largest towns linked directly by rail. Up to half the counties population could be benefiting from high quality public transport.  This would have a transformative effect on the collective perception of the county from within and without. The required investment is so negligible as to be not worth mentioning.

Maytró fits neatly into national and local policy frameworks both current and past.  It requires little extra resourcing, it is rather about adopting a new mental model, defining new, heightened expectations around what level of service the Irish public can expect, outside Dublin.

While other regional cities are starting to talk about implementing local rail services (and that is both welcome and overdue), there is no reason why Mayo should have to wait at the back of the line, just because it might embarrass the "cities" .  Mayo is ready to lead, this project is ready to go.

The is no reasonable obstacle to implementation, which could be done almost immediately, except the mentality of the parties that control public transport in Ireland.  Despite the mainstreaming of greenwashing, and thus the necessity to project a favourable response to any proposal for enhanced public transport,  I have yet to witness any real commitment to public transport provision by the transport troika, Iarnród Éireann, the NTA and the Department of Transport. Rather the historical emphasis on roads, Dublin and the managed decline of the railway still seems to hold sway.  I would be only too delighted to be proven wrong but my cynicism is informed by a realistic appraisal of historical events, a history which indeeds seems to be rhyming with the release of another Strategic Rail Report twenty years later.  lf McKinsey can't find a private rent within, it won't be viable.

Twenty years ago the original Mayo delegation comprising TDs,  urban and county councillors, IRD members and others managed to win the grudging concession that is the current service today, a foot in the door, if you will.  I'm sure if such a delegation could be put together again today to push the project forward again it would find a much more favourable reception today.
