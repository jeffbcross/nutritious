# nutritious

This was a demo app for [ng-conf](http://ng-conf.org) 2014 given by Jeff Cross ([@jeffbcross](https://twitter.com/jeffbcross)).
The app demonstrates a couple of new [AngularJS](http://angularjs.org) components from the [ng-dpd](https://github.com/ng-dpd) project, as well as one random [Nutrition Facts](https://github.com/jeffbcross/jc-nutritional-info) component.

See the presentation on YouTube: [http://www.youtube.com/watch?v=0V8fQoqQLLA](http://www.youtube.com/watch?v=0V8fQoqQLLA)

Slides for the presentation (not really worth looking at out of context): [https://docs.google.com/presentation/d/13BywizxWG69NN6TvOfF7-7S-f114XKXyF5GpUqhjwYE/edit#slide=id.p14](https://docs.google.com/presentation/d/13BywizxWG69NN6TvOfF7-7S-f114XKXyF5GpUqhjwYE/edit#slide=id.p14)

## usage

 * Install Deployd (see: [deployd.com](http://www.deployd.com))
 * `cd app/`
 * `$ dpd -d` (Should open the deployd dashboard in the default browser)
 * To see the app, browse to [http://localhost:2403](http://localhost:2403)
 * To populate the app with sample data, open these files in order:
    * [http://localhost:2403/populate-foods.html](http://localhost:2403/populate-foods.html)
    * [http://localhost:2403/populate-users.html](http://localhost:2403/populate-users.html)
    * [http://localhost:2403/populate-activities.html](http://localhost:2403/populate-activities.html) (Note: This one takes a while, give it 10 seconds or so before closing. You can check the data tab for activities in the dashboard to make sure it has data)
 * If the app has been populated with sample data, log in as username1/foobar
