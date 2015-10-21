'use strict';

/**
 * @ngdoc service
 * @name adamdabbracciApp.clientsFactory
 * @description
 * # clientsFactory
 * Factory in the adamdabbracciApp.
 */
angular.module('adamdabbracciApp')
  .factory('clientsFactory', function () {
    
    //define portfolio items
    var portfolio = {
      1: {
        id: 1,
        name: "Mouse To Your House",
        description: "From personal shopping to gift baskets, Mouse To Your House is the premier Disney personal shopping company in Orlando. We worked together to bring the comapny's energy and attention to detail to their online presence.",
        fulldescription: "Mouse To Your House is the premier Disney World personal shopping service based out of Orlando, FL. Started in 2013 by a young entrepreneur after realizing the need for a reliable and personable service in the niche market, MTYH has grown to be a national brand with a cult-like following on social media and Periscope. MTYH's founder needed a new e-commerce site that brought both her energy and attention to detail on to her store. Combined with her strong online presence, her new Shopify design skyrocketed her sales and helped retain more customers.",
        thumbnail: 'mtyh.png' ,
        link: "http://mousetoyourhouse.com/",
        frontend: 'Liquid Templating',
        backend: 'Shopify'
      },
      2: {
        id: 2,
        name: "Hoop Culture",
        description: "Hoop Culture sleeps, eats, and breaths basketball - and they wanted to step their brand up to the next level. With Shopify and a custom theme, we built a fresh new look for their digital store.",
        fulldescription: "Hoop Culture is a nation-wide lifestyle brand specializing in basketball clothing and accessories. Their customers eat, sleep, and breath the game - so much that they've become one of the top basketball brands in the nation. Their focus is on passion and commitment and they wanted their online store to represent that. We combined a custom Shopfiy theme and their killer social media strategy to create an immersive shopping experience.",
        thumbnail: 'hoopculture.png' ,        
        link: "http://hoop-culture.myshopify.com/",
        frontend: 'Liquid Templating, Bootstrap',
        backend: 'Shopify'
      },
      3: {
        id: 3,
        name: "Bags Corporate",
        description: "Designed specifically for business-to-business sales, BagsInc.com emphasizes the company's ability to deploy cross-trained employees to solve complex travel problems. The site features all 5 major products, and offers solution packages for specific travel needs.",
        fulldescription: "Bags Inc. is one of the top travel logistics provider in the nation. From airline luggage delivery to drop-in valet stands, Bags provides a wide array of services to a variety of industries. Their corporate site needed to convey a large amount of information in a small condensed format, so they turned to a simple but graphic-heavy layout. Bags's complicated network of interconnected services required a consistent structure and solid copy across the site, but the result is an exicting and intuitive product.",
        thumbnail: 'bags.png' ,
        link: "http://bagsinc.com/corporate",
        frontend: 'Bootstrap',
        backend: 'Classic ASP, WPF'
      },
      4: {
        id: 4,
        name: "LokSak",
        description: "LokSak is a leading manufacturer in camping and military bags. Their website needed to focus on both their civilian and military applications, while incorporating a storefront for their retail buyers.",
        fulldescription: "LokSak provides a variety of survival-related bags and accessories for civilian and military use. From bags that protect food against bears to phone cases that prevent identity theft, LokSak's product line targets all sorts of customers. They needed a site that represented the different applications of their line, while cross-selling similar products. We accomplished this by creating two versions of the site - one for civilian and one for military applications. With similar designs but vastly different imagery and copy, LokSak's site can target multiple audiences without complicated design changes.",
        thumbnail: 'loksak.png',        
        link: "http://loksak.com/civilian",
        cocreated: "Digital Culture LLC",
        frontend: 'Wordpress',
        backend: 'Shopify'
      },
      5: {
        id: 5,
        name: "Bags VIP",
        description: "Bags VIP is a premier luggage delivery service that handles your luggage between your home, airport, and destination - all without lifting a finger. The service operates world-wide and has over 250 service locations in the US alone.",
        fulldescription: "Bags VIP is the \"first-class\" of the luggage world - having your bags picked up and delivered between your home, airport, and destination - without lifing a finger. The service, which operates over 250 locations in the U.S. alone, needed a site that gave the \"premier\" feel while still providing an accessible and intuitive interface for an otherwise stressful time. The site, built atop existing infrastructure, provided more detailed information and an updated checkout process increased conversions by reducing friction during the process.",
        thumbnail: 'mte.png',        
        link: "http://maketraveleasier.com",
        cocreated: "Digital Culture LLC",        
        frontend: 'Bootstrap',
        backend: 'Classic ASP, WPF'
      },
    }
    
    var factory = {};
    
    factory.getPortfolio = function(){
      return portfolio;
    }
    
    
    Object.size = function(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };

    factory.getPortfolioSize = function(){
      return Object.size(portfolio);
    }
    
    
    factory.getPortfolioWithLimit = function(limit)
    {
      var results = {};
      
      for(var i = 1; i < limit + 1; i++)
      {
        results[i] = (portfolio[i]);
      }
      
      return results;
    }
    
    factory.getPortfolioItem = function(id)
    {
      var results = portfolio[id];
      if (results === undefined)
      {
        console.log("Could not find item " + id);
        return null;
      }
      else
      {
        return results;
      }
      
    }
    
    
    return factory;
  });
