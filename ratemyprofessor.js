
var soup = require('jssoup').default

var html = `

<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="google-site-verification" content="F8gUuqzRvOrAlhaGyP7aAuMs_Se8zK-98Ai2sNsIZEo"/>
    <meta name="google-site-verification" content="hk1NnSbYuDC0Sppgbf7YIT-VxUiRbOVRdtqA4AmkGzM"/>
    <meta name="google-site-verification" content="CKMC_IwvKoVbX1U8x1A9yzKABsSlop6qxfuDzwfV7Qs"/> <!--  relaunch qa -->
    <meta name="google-site-verification" content="1D_3ZfAdMu4Tki8pFRj68YAqYot-paTOoDVzCTIJZZI"/> <!--  relaunch rmp -->
    <meta name="google-signin-client_id" content="14147781149-i5ph5oqooelp3k0qfrb3jkk6vs4528ha.apps.googleusercontent.com">
    <script src="https://use.fontawesome.com/fbed9f71e3.js"></script>
    <link rel="stylesheet" href="/assets/application-eec8c6940517e3f25ed43c3fcd254cf0.css"/>
    <script src="/assets/libs/jquery-7f5fea5cae853e98f1d3f5d509216bd4.js" type="text/javascript" ></script>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
    
      <meta name="robots" content="all"/>
    
    <meta name="description" content="Rating and reviews for Professor Ryan Carroll  from Long Beach City College Long Beach, CA United States.">
    <title>Ryan Carroll at Long Beach City College - RateMyProfessors.com</title>
    <meta property="og:url" content="https://www.ratemyprofessors.com/ShowRatings.jsp?tid=2093080">
    <meta property="og:title" content="Ryan Carroll at Long Beach City College - RateMyProfessors.com">
    <meta property="og:description" content="Check out the ratings and reviews for Ryan Carroll  from Long Beach City College in Long Beach, CA">
    
        <meta property="og:image" content="https://www.ratemyprofessors.com/assets/RMP_logo.png">
    

    <meta property="og:type" content="website">
    
    
  <link rel="canonical" href="https://www.ratemyprofessors.com/ShowRatings.jsp?tid=2093080" />
    
    <link rel="icon" href="/images/favicon-16.png" />
    <link rel="icon" sizes="32×32" href="/images/favicon-32.png" />
    <link rel="apple-touch-icon" href="/images/favicon-57.png" />
    <link rel="apple-touch-icon" sizes="48×48" href="/images/favicon-48.png" />
    <link rel="apple-touch-icon" sizes="72×72" href="/images/favicon-72.png" />
    <link rel="apple-touch-icon" sizes="114×114" href="/images/favicon-114.png" />
    <link rel="apple-touch-icon" sizes="152×152" href="/images/favicon-152.png" />
    <link rel="apple-touch-icon-precomposed" href="/images/favicon-196.png"/>
    <!--[if IE]><link rel="shortcut icon" href="/images/favicon-16.ico" /> <![endif]-->
    <meta name="msapplication-TileColor" content="#ffffff"/>
    <meta name="msapplication-TileImage" content="/images/favicon-16.png"/>
    <script>
      (function() {
        var _fbq = window._fbq || (window._fbq = []);
        if (!_fbq.loaded) {
          var fbds = document.createElement('script');
          fbds.async = true;
          fbds.src = '//connect.facebook.net/en_US/fbds.js';
          var s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(fbds, s);
          _fbq.loaded = true;
        }
        _fbq.push(['addPixelId', '331289063738687']);
      })();
      window._fbq = window._fbq || [];
      window._fbq.push(['track', 'PixelInitialized', {}]);
    </script>
    <noscript><img height="1" width="1" alt="" style="display:none" src="https://www.facebook.com/tr?id=331289063738687&ev=PixelInitialized" /></noscript>

    
    
    
    

    

    
    <script type="text/javascript">
      window.RMP = window.RMP || {};

      var protocol = window.location.protocol;
      // console.log('protocol is ',protocol);
      typeaheadurl = "http://search-production.ratemyprofessors.com/solr/rmp/select/?solrformat=true&rows=20&wt=json&json.wrf=noCB";
      if (protocol == 'https:') {
        typeaheadurl = "https://search-production.ratemyprofessors.com/solr/rmp/select/?solrformat=true&rows=20&wt=json&json.wrf=noCB"
      }

      // Environment flag for DFP
      var env = 'other';
      if(window.location.host === 'www.ratemyprofessors.com') {
        env = 'production';
      } else if(window.location.host === 'staging.ratemyprofessors.com') {
        env = 'staging';
      } else if (window.location.host === 'dev.ratemyprofessors.com') {
        env = 'dev';
      }

      // device flag for DFP
      var deviceFlag = 'desktop';
      if(window.matchMedia('(max-width: 767px)').matches) {
        deviceFlag = 'mobile';
      }

      window.RMP.Settings = {
        pathname : "",
        uri : "/ShowRatings.jsp",
        page: "show_professor",
        typeahead :typeaheadurl,
        ssltypeahead:typeaheadurl,
        professorID : "2093080",
        schoolID: "",
        department: "Physical Science",
        state: "CA",
        country: "0",
        user: {},
        pageLevelData: {"pageName":"/professors/Ryan Carroll/2093080","channel":"professors","v49":"professors","heir2":"/professors/Ryan Carroll/2093080","prop2":"United States","prop3":"Physical Science","prop5":"CA","prop6":"Long Beach City College","prop7":"Ryan Carroll","prop8":"visitor","prop9":"2378","prop10":"2093080","section":"professors","schoolid":"2378"},
        reloadInterval: 30000,
        adCampaignFlag: true,
        adCampaignCountry: 0,
        ads: {
          useDemandManager: false,
          unitPath: "/21667365449/RMP/rmp_web/prof_ratings",
          adTemplate: {"google":3,"taboola":2},
          refreshRate: 30000,
          pageName: "show_professor",
          lazyLoadConfig: {
            fetchMarginPercent: 0,  // Fetch slots within 0 viewports.
            renderMarginPercent: 0,  // Render slots within 0 viewports.
            mobileScaling: 2.0  // Double the above values on mobile.
          },
          universalTargeting: {
            env: env,
            device: deviceFlag
          }
        }
      }

      if (typeof MTVN == "undefined") MTVN = {};
      if (typeof MTVN.config == "undefined") MTVN.config = {};
      if (typeof MTVN.config.btg == "undefined") MTVN.config.btg = {};
      if (typeof MTVN.config.btg.DoubleClick == "undefined") MTVN.config.btg.DoubleClick = {};


      MTVN.config.btg.DoubleClick.auto = false;
      MTVN.config.btg.DoubleClick.onDemand = true;
      MTVN.config.btg.DoubleClick.reloadableAds = true;
      MTVN.config.btg.DoubleClick.reloadInterval = 30000;
      //temporary setting for testing refresh by visibility only on search page
      /*if(RMP.Settings.page == 'show_school')
          var autoRefreshByVisibility = true;
      else*/
      var autoRefreshByVisibility = false;
      console.log("Refresh By Visibility: " + (autoRefreshByVisibility ? 'On' : 'Off'))
      var vmn_page_data = {
        "metadata" :  { "property" : "rmp", "hub" : "", "is_main": false },
        "mappings" : {
          "ad-unit" : {"1" : "@property","2": "professor" },
          "key-values" : {"pageName":"/professors/Ryan Carroll/2093080","channel":"professors","v49":"professors","heir2":"/professors/Ryan Carroll/2093080","prop2":"United States","prop3":"Physical Science","prop5":"CA","prop6":"Long Beach City College","prop7":"Ryan Carroll","prop8":"visitor","prop9":"2378","prop10":"2093080","section":"professors","schoolid":"2378"},
          "exclusion-categories" : "hub_pages"
        },
        "settings" : {
          "reload" : true,
          "reload_interval": 30000,
          "autoRefreshByVisibility" : autoRefreshByVisibility
        }
      };


      // Set-up placeholder for missing coda tracking features
      // TODO: update this for new events
      if (typeof mtvn == "undefined") mtvn = {};
      if (typeof mtvn.btg == "undefined") mtvn.btg = {};
      if (typeof mtvn.btg.Controller == "undefined") mtvn.btg.Controller = {};
      if (typeof mtvn.btg.Controller.sendLinkEvent == "undefined") mtvn.btg.Controller.sendLinkEvent = function(o) {
        analytics.track('LinkEvent', o);
      };
    </script>
    
    
    <script src="https://tagan.adlightning.com/cheddartv/op.js" type="text/javascript"> </script>

    
    
<script>
	
		var sourceID = "HosHQVFNue2Gmbd8vliA0aG6NpKZ56K4"
		var cdnURL = '/segment/cdn/' + sourceID + '/payload.js';
	

	!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src=cdnURL;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";
		analytics.load(sourceID);

		var options = {
			professorName: 'Ryan Carroll',professorID: '2093080',professor: '2093080 - Ryan Carroll',schoolName: 'Long Beach City College',schoolID: '2378',school: '2378 - Long Beach City College',
		};

		analytics.page(options);
	}}();
</script>

    
    <script crossorigin="anonymous" src="https://polyfill.io/v3/polyfill.min.js?features=default,es5,es6&flags=gated"></script>

    
    <script src="/assets/adBundle-d55d6c5daa900583bc79f4151ea81b1f.js" type="text/javascript" ></script>

    
    <link crossorigin rel="preload" href="/assets/leaguegothic-regular-webfont.woff" as="font" type="font/woff">
    <link crossorigin rel="preload" href="/assets/subset-SourceSansPro-Light.woff2" as="font" type="font/woff2">
  </head>
  <body class="show_professor">
    
    <script src="/assets/libs/oas.js"></script>

    <!-- <div class="overlay"></div> -->
    <!--do not modify this script -->
    <div id="mobileNav" class="slide">
      <div class="mobile_nav_wrap">
        <div class="navItems">
          <ul class="menuNav">
            <!-- One Menu Item -->
            <li>
              <a href="/mobile/professor_search">
                <span class="icon icon-professor"></span>
                <span class="title">Professors</span>
                <span class="arrow"></span>
              </a>
            </li>
            <!-- One Menu Item -->

            <!-- One Menu Item -->
            <li>
              <a href="/mobile/school_search">
                <span class="icon icon-school"></span>
                <span class="title">Schools</span>
                <span class="arrow"></span>
              </a>
            </li>
            <!-- One Menu Item -->

            <!-- One Menu Item -->
            <li>
              <a href="/mobile/rate_search">
                <span class="icon icon-rate"></span>
                <span class="title">Rate</span>
                <span class="arrow"></span>
              </a>
            </li>
            <!-- One Menu Item -->

            <!-- One Menu Item -->
            <li>
              <a href="/mobile/blog">
                <span class="icon icon-blog"></span>
                <span class="title">Blog</span>
                <span class="arrow"></span>
              </a>
            </li>
            <!-- One Menu Item -->

            <!-- One Menu Item -->
            <li id="mobilemyProfContainer" class="hide">
              <a href="/mobile/myprofs" >
                <span class="icon icon-my-profs"></span>
                <span class="title">My Profs</span>
                <span class="arrow"></span>
              </a>
            </li>
            <!-- One Menu Item -->

            <!-- Not Logged In -->
            <div id="mobileLoginSectionContainer">
              
  <!-- Need ajax widget -->
  <li class="mobile_login logged_off">
    <a href="/member">
      <span class="mobile_login_text">log In</span>
      <span class="arrow"></span>
    </a>
  </li>


            </div>
            <li id="mobileSocial" >
              <ul>
                <li><a href="https://www.facebook.com/RateMyProfessor" class="fa fa-facebook" target="_blank" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'GLOBAL:facebook', linkType:'o' } );"></a></li>
                <li><a href="http://instagram.com/ratemyprofessors" class="fa fa-instagram" target="_blank" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'GLOBAL:instagram', linkType:'o' } );"></a></li>
                <li><a href="https://twitter.com/ratemyprofessor" class="fa fa-twitter" target="_blank" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'GLOBAL:twitter', linkType:'o' } );"></a></li>
                <li><a href="https://www.snapchat.com/add/ratemyprofessor?utm_source=uwide_links&utm_medium=web&utm_campaign=uwide_links" class="fa fa-snapchat-ghost" target="_blank" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'GLOBAL:snapchat', linkType:'o' } );"></a></li>
                <li><a href="http://ratemyprofessors.tumblr.com/" class="fa fa-tumblr" target="_blank" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'GLOBAL:tumblr', linkType:'o' } );"></a></li>
                <li><a href="http://www.pinterest.com/ratemyprofessor/" class="fa fa-pinterest-p" target="_blank" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'GLOBAL:pinterest', linkType:'o' } );"></a></li>
                
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Starts The Page Wrap -->
    <div id="container">
      <div class="overlay"></div>
      <!-- Begins Mobile Header -->
      <div id="mobileHeader" class="slide">
	<a id="mobileHamburger" href="#"><span></span></a>
	<a href="/" id="mLogo"></a>
	<div class="promo-holder"></div>
	<a href="#" class="icon-search"></a>
	<div class="mobileSearch">
		<div id="mSearchBox">
			<form class = "main-search-form"><input type="search" id="msearchr" name = "query" placeholder="Search ..." /></form>
		</div>
		<div id="headerAutocomplete">
			<div class = "results-container">
				<div id = "header-results">
					<div class="professor-list">
						<div class="label">Professors</div>
						<ul></ul>
						<a href="/search.jsp?queryBy=teacherName&query={{requestparam}}" class="view-all view-all-professors">View All Professors</a>
					</div>
					<div class="school-list">
						<div class="label">Schools</div>
						<ul></ul>
						<a href="/search.jsp?queryBy=schoolName&query={{requestparam}}" class="view-all view-all-schools">View All Schools</a>
					</div>
				</div>
				<div id = "header-no-results">
					Sorry No Results Found
				</div>
			</div>
		</div>
	</div>
</div>
      <!-- Ends Mobile Header -->

      
        <!-- Starts Header -->
        <header>
  <div class="overlay"></div>
  <a href="/" id="logo"  onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'GLOBAL:Logo', linkType:'o' } );"></a>
  <!-- Starts the header search box -->
  <div id="searchBox">
    <div class="searchBox-wrapper">
      <form class = "main-search-form" method = "GET"><input type="text" id="searchr" name = "query" placeholder="Search for a professor or school" autocomplete="off" autocorrect="off" spellcheck="false" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'SEARCH:Filter', linkType:'o' } );"/></form>
      <div id="tablet-social-dropdown">
        <div class="tablet-social">
          <span class="social-text">Follow us</span>
        </div>
        <div class="tablet-social-list">
          <ul>
            <a href="https://www.facebook.com/RateMyProfessor" target="_blank" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'GLOBAL:facebook', linkType:'o' } );">
              <li>
                <i class="fa fa-facebook"></i>
                <span class="text-social">facebook</span>
              </li>
            </a>
            <a href="http://instagram.com/ratemyprofessors" target="_blank" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'GLOBAL:instagram', linkType:'o' } );">
              <li>
                <i class="fa fa-instagram"></i>
                <span class="text-social">instagram</span>
              </li>
            </a>
            <a href="https://twitter.com/ratemyprofessor" target="_blank" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'GLOBAL:twitter', linkType:'o' } );">
              <li>
                <i class="fa fa-twitter"></i>
                <span class="text-social">twitter</span>
              </li>
            </a>
            <a href="https://www.snapchat.com/add/ratemyprofessor?utm_source=uwide_links&utm_medium=web&utm_campaign=uwide_links" target="_blank" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'GLOBAL:snapchat', linkType:'o' } );">
              <li>
                <i class="fa fa-snapchat-ghost"></i>
                <span class="text-social">snapchat</span>
              </li>
            </a>
            <a href="http://ratemyprofessors.tumblr.com/" target="_blank" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'GLOBAL:tumblr', linkType:'o' } );">
              <li>
                <i class="fa fa-tumblr"></i>
                <span class="text-social">tumblr</span>
              </li>
            </a>
            <a href="http://www.pinterest.com/ratemyprofessor/" target="_blank" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'GLOBAL:pinterest', linkType:'o' } );">
              <li>
                <i class="fa fa-pinterest-p"></i>
                <span class="text-social">pinterest</span>
              </li>
            </a>
 
          </ul>
        </div>
      </div>
    </div>
    <div id="headerAutocomplete">
      <div class="results-container">
        <div id = "header-results">
          <div class="professor-list">
            <div class="label">Professors</div>
            <ul></ul>
            <a href="/search.jsp?queryBy=teacherName&query={{requestparam}}" class="view-all view-all-professors">View All Professors</a>
          </div>
          <div class="school-list">
            <div class="label">Schools</div>
            <ul></ul>
            <a href="/search.jsp?queryBy=schoolName&query={{requestparam}}" class="view-all view-all-schools">View All Schools</a>
          </div>
        </div>
        <div id = "header-no-results">
          Sorry No Results Found
        </div>
      </div>
    </div>
  </div>
  <!-- Ends the header search box -->

  <!-- Starts the Head Social Bar -->
  <div id="headSocial">
    <ul>
      <li><a href="https://www.facebook.com/RateMyProfessor" class="fa fa-facebook" target="_blank" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'GLOBAL:facebook', linkType:'o' } );"></a></li>
      <li><a href="http://instagram.com/ratemyprofessors" class="fa fa-instagram" target="_blank" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'GLOBAL:instagram', linkType:'o' } );"></a></li>
      <li><a href="https://twitter.com/ratemyprofessor" class="fa fa-twitter" target="_blank" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'GLOBAL:twitter', linkType:'o' } );"></a></li>
      <li><a href="https://www.snapchat.com/add/ratemyprofessor?utm_source=uwide_links&utm_medium=web&utm_campaign=uwide_links" class="fa fa-snapchat-ghost" target="_blank" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'GLOBAL:snapchat', linkType:'o' } );"></a></li>
      <li><a href="http://ratemyprofessors.tumblr.com/" class="fa fa-tumblr" target="_blank" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'GLOBAL:tumblr', linkType:'o' } );"></a></li>
      <li><a href="http://www.pinterest.com/ratemyprofessor/" class="fa fa-pinterest-p" target="_blank" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'GLOBAL:pinterest', linkType:'o' } );"></a></li>
    </ul>
  </div>
  <!-- Ends the Head Social Bar -->
  <div id="desktopLoginSectionContainer">
    
	<!-- Need ajax widget -->
	<a href="/member" id="login" class="loggedout">
		<span class="welcome-tablet">Log In</span>
		<span class="welcome"> Log In / Sign Up </span>
	</a>


  </div>
</header>

        <!-- Ends Header -->

        <!-- Starts left Nav -->
        
  <aside id="leftNav" class="height-col">
    <div id="leftOverlay"></div>
    <!-- Starts Left Menus -->
    <div id="menuWrap">


      <!-- Prof Menu -->
      <div id="profMenu" class="menu">
        <div class="header">Find a Professor</div>
        <div class="prof-block-form">
<div class="center-block-form">
  <div class="h1">Find a Professor</div>
  <div class="search-by" data-search="profMenu">
    <span class="label">SEARCH BY</span>
    <a href="javascript:void(0)" data-type="professor-names" class="active" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'LEFTNAV:Profs_byname', linkType:'o' } );">Name</a>
    <a href="javascript:void(0)" data-type="professor-locations" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'LEFTNAV:Profs_byschool', linkType:'o' } );">School</a>
  </div>
   <form action="/search.jsp?id=prof-name" method="get" name="prof-name" class="professor-names" id="prof-name" >
    <input type="hidden" name="queryoption" value="HEADER" id="queryoption" />
    <input type="hidden" name="queryBy" value="teacherName" id="queryBy" />
    <div class="search-info">
      <div class="optional-flag">
        <span class="line-form-txt">I'm looking for a professor at</span>
        <div class="drop-down-fix">
              <input type="text" id="searchProfessorSchool2" data-type="school" name="schoolName" placeholder="your school" autocorrect="off" autocomplete="off"/>
                <input type="hidden" class="schoolID" name="schoolID" id="nameprofid" />
              <div id="profauContainer2" class="autocomplete-container">
               <ul></ul>
              </div>
                <!-- <span class="optional-content">Optional</span>-->
              </div>

              <span class="line-form-txt">named</span>
        <div class="drop-down-fix">

        <input type="text" name="query" id="searchProfessorName" data-type="name" placeholder="professor's name" autocorrect="off" autocomplete="off" required class="required"/>
                <div id="profNameAc" class="autocomplete-container">
                  <ul></ul>
                </div>
                <span class="error-message" id ="leftNav_error-message-align">This field is required.</span>
            </div>
        </div>

        <div class="cta">
          <input type="submit" name="_action_search" value="Search" id="prof-name-btn" />
          <a class="reset-search-form" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'LEFTNAV:Profs_byname_cancel', linkType:'o' } );">cancel</a>
        </div>
      </div>
   </form>

  <form action="/search.jsp?id=prof-location" method="get" name="prof-location" class="professor-locations" id="prof-location" >
    <input type="hidden" name="queryoption" value="TEACHER" id="queryoption" />
    <input type="hidden" name="queryBy" value="schoolDetails" id="queryBy" />
    <input type="hidden" class="schoolID" name="schoolID" />

    <div class="search-info">
      <span class="inline-form-txt">I'm looking for professors at</span>
      <div class="drop-down-fix">
         <input type="text" id="searchProfessorSchool" data-type="school" name="schoolName" placeholder="your school" autocorrect="off" autocomplete="off" required onchange="clearDepartmentDropDown();" onkeyup="clearDepartmentDropDown();"/>
         <div id="profauContainer" class="autocomplete-container searchProfessorSchoolAC">
          <ul></ul>
         </div>
         <span class="error-message" id ="leftNav_error-message-align">This field is required.</span>
      </div>
      <div class="h2">in the</div>
      <div class="no-default">
        <select name="dept" id="searchProfessorDepartment" data-type="department" data-placeholder-option="false" data-size="10" onchange="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'LEFTNAV:Profs_byschool_deptdropdown', linkType:'o' } );">
          <option>select</option>
        </select>
      </div>
      <span class="inline-form-txt"> department.</span>

    <div class="cta">
      <input type="submit" name="_action_search" value="Search" id="prof-location-btn" />
      <a class="reset-search-form" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'LEFTNAV:Profs_byschool_cancel', linkType:'o' } );">cancel</a>
    </div>

    </div>
  </form>


   </div>
  </div>
      </div>
      <!-- Ends Prof menu -->

      <!-- School Menu -->
      <div id="schoolMenu" class="menu">
        <div class="header">Find a School</div>
        <div class="school-block-form">
  <div class="center-block-form">
    <div class="h1 mobile-header">Find a School</div>
    <div class="h1 header">Find your school</div>
    <div class="search-by" data-search="schoolMenu">
      <span class="label">SEARCH BY</span>
      <a href="javascript:void(0)" data-type="school-names" class="active" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'LEFTNAV:School_byname', linkType:'o' } );">Name</a>
      <a href="javascript:void(0)" data-type="school-locations" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'LEFTNAV:School_bylocation', linkType:'o' } );">Location</a>
    </div>
    <form action="/search.jsp?id=schoolNames" method="get" name="schoolNames" class="searchform school-names" id="schoolNames" >
      <input type="hidden" name="queryoption" value="HEADER" id="queryoption" />
      <input type="hidden" name="queryBy" value="schoolName" id="queryBy" />
      <div class="search-info">
        <div class="drop-down-fix">
          <input type="text" onfocus="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'LEFTNAV:School_byname_schooltypeahead', linkType:'o' } );" id="schoolName" name="query" placeholder="school's name" autocorrect="off" autocomplete="off" required/>
          <div id="schoolauContainer" class="autocomplete-container">
            <ul></ul>
          </div>
          <span class="error-message" id ="leftNav_error-message-align">This field is required.</span>
        </div>
        <div class="info">
          Looking for a professor by school/department?
          <a href="/mobile/professor_search" class="click-here lowercase">Click here.</a>
        </div>
        <div class="cta">
         <input type="submit" value="Search" action="search" id="schoolNames-btn" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'LEFTNAV:School_byname_search', linkType:'o' } );" />
          <br />
          <a class="reset-search-form">CANCEL</a>
          <div class="left-info">
            Looking for a professor by school/department?
            <a href="/mobile/professor_search" class="click-here lowercase">Click here.</a>
          </div>
        </div>
      </div>
    </form>
    <form action="/search.jsp" method="get" name="schoollocations" class="searchform school-locations" id="schoollocations" >
      <input type="hidden" name="queryoption" value="HEADER" id="queryoption" />
      <input type="hidden" name="queryBy" value="schoolName" id="queryBy" />
      <input type="hidden" name="country" value="united states" id="country" />
      <input type="hidden" name="facetSearch" value="true" id="facetSearch" />
      <div class="form-element required search-info">
        <span class="line-form-txt"><div class="h2">I'm looking for a school in </div></span>
        <div class="select-wraper">
          <select onChange="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:&#39;LEFTNAV:School_bylocation_statedropdown&#39;, linkType:&#39;o&#39; } );" id="schoolState" name="stateselect" required="" data-placeholder-option="false" data-size="10" >
<option value="">select state</option>
<option value="ak" >Alaska</option>
<option value="al" >Alabama</option>
<option value="ar" >Arkansas</option>
<option value="az" >Arizona</option>
<option value="ca" >California</option>
<option value="co" >Colorado</option>
<option value="ct" >Connecticut</option>
<option value="dc" >Washington DC</option>
<option value="de" >Delaware</option>
<option value="fl" >Florida</option>
<option value="ga" >Georgia</option>
<option value="hi" >Hawaii</option>
<option value="ia" >Iowa</option>
<option value="id" >Idaho</option>
<option value="il" >Illinois</option>
<option value="in" >Indiana</option>
<option value="ks" >Kansas</option>
<option value="ky" >Kentucky</option>
<option value="la" >Louisiana</option>
<option value="ma" >Massachusetts</option>
<option value="md" >Maryland</option>
<option value="me" >Maine</option>
<option value="mi" >Michigan</option>
<option value="mn" >Minnesota</option>
<option value="mo" >Missouri</option>
<option value="ms" >Mississippi</option>
<option value="mt" >Montana</option>
<option value="nc" >North Carolina</option>
<option value="nd" >North Dakota</option>
<option value="ne" >Nebraska</option>
<option value="nh" >New Hampshire</option>
<option value="nj" >New Jersey</option>
<option value="nm" >New Mexico</option>
<option value="nv" >Nevada</option>
<option value="ny" >New York</option>
<option value="oh" >Ohio</option>
<option value="ok" >Oklahoma</option>
<option value="or" >Oregon</option>
<option value="pa" >Pennsylvania</option>
<option value="ri" >Rhode Island</option>
<option value="sc" >South Carolina</option>
<option value="sd" >South Dakota</option>
<option value="tn" >Tennessee</option>
<option value="tx" >Texas</option>
<option value="ut" >Utah</option>
<option value="va" >Virginia</option>
<option value="vt" >Vermont</option>
<option value="wa" >Washington</option>
<option value="wi" >Wisconsin</option>
<option value="wv" >West Virginia</option>
<option value="wy" >Wyoming</option>
<option value="amer. samoa" >American Samoa</option>
<option value="guam" >Guam</option>
<option value="n. mariana is" >Northern Mariana Islands</option>
<option value="puerto rico" >Puerto Rico</option>
<option value="us vi" >U.S. Virgin Islands</option>
</select>
        </div>
        <span class="error-message" id ="leftNav_error-message-align">This field is required.</span>
      </div>
      <div class="info">
        Looking for a professor by school/department?
        <a href="/mobile/professor_search" class="click-here lowercase">Click here.</a>
      </div>
      <div class="cta">
        <input type="submit" id="schoolLocationz" name="schoolLocationz" value="Search" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'LEFTNAV:School_bylocation_search', linkType:'o' } );"/>
        <a class="reset-search-form">CANCEL</a>
      </div>
    </form>
  </div>
</div>


      </div>
      <!-- Ends school menu -->

      <!-- Rate Menu -->
      <div id="rateMenu" class="menu">

        <div class="header">Rate a</div>
        <div class="school-block-form">
  <div class="h1">Rate a</div>
  <div class="search-by" data-search="rateMenu">
    <a href="javascript:void(0)" data-type="rate-professor" class="active" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'LEFTNAV:Rate_Prof', linkType:'o' } );">Professor</a>
    <a href="javascript:void(0)" data-type="rate-schools" class="" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'LEFTNAV:Rate_School', linkType:'o' } );">School</a>
  </div>
  <form action="/search.jsp?id=rateProfessor" method="get" name="rateProfessor" class="searchform rate-professor" style="" id="rateProfessor" >
    <input type="hidden" name="queryoption" value="HEADER" id="queryoption" />
    <input type="hidden" name="queryBy" value="teacherName" id="queryBy" />
    <div class="search-info">
      <span class="wrap">
        I want to rate <br />
        <input type="text" id="rateProfessorAC" name="query" placeholder="Professor's Name" required class="required" />
        <div id="rateProfAC" class="autocomplete-container">
          <ul></ul>
        </div>
        <span class="error-message" id="leftNav_error-message-align">This field is required.</span>
      </span>
    </div>
    <div class="cta">
      <input type="submit" value="Search" id="rateProfessor-btn"/> <br />
      
      <a class="reset-search-form">cancel</a>
    </div>
  </form>
  <form action="/search.jsp?id=rateSchool" method="get" name="rateSchool" class="searchform rate-schools" style="" id="rateSchool" >
    <input type="hidden" name="queryoption" value="HEADER" id="queryoption" />
    <input type="hidden" name="queryBy" value="schoolName" id="queryBy" />
    <div class="search-info">
      <span class="wrap">
        I want to rate <br />
        <input type="text" id="schoolName" name="query" placeholder="School's Name" required class="required"/>
        <div id="rateSchoolAC" class="autocomplete-container">
          <ul></ul>
        </div>
        <span class="error-message" id="leftNav_error-message-align">This field is required.</span>
      </span>
    </div>
    <div class="cta">
      <input type="submit" value="Search" id="rateSchool-btn" /> <br />
      
      <a class="reset-search-form">cancel</a>
    </div>
  </form>
</div>
      </div>
      <!-- Ends Rate Menu -->

      <!-- Blog Menu -->
  	    <div id="blogMenu" class="menu js-blog-menu-global">
  	      <div class="blogMenu-inner">
  		      <div class="header">Rate My Professors Blog</div>
  		      <div class = "clearfix"></div>
<div class="panel-filter">
  <div class="result-count">
    <div class="sort-option">
      

      <select id="blog-filter" name="blogfilter" class="blog-filters" >
<option value="All">All Categories</option>
<option value="RMP Buzz" >RMP Buzz</option>
<option value="Lists" >Top Lists</option>
<option value="Misc." >Miscellaneous</option>
</select>
		</div>
  </div>
</div>
<div class="result-list">
  <ul id="blog-item-list">
  
  </ul>
  
</div>

  	   	  </div>
  	    </div>
      <!-- Ends Blog Menu -->


      <!-- My Profs Menu -->
	      <div id="myProfsMenu" class="menu">
	        <a class='close-left-nav close-this'>&#215;</a>
<div class="header">Saved Professors</div>
<hr>
<div class="my-professors-result-list">
  <ul>
  </ul>
  <p class = "no-professors"></p>
</div>

<div class="myProfprogressbtnwrap" data-search-type="search">
  <a href="#" class="content" id="myProfloadMore" data-teach-id="2093080" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROF:LoadMore', linkType:'o' } );">Load More</a>
  <div class="progress-bar"></div>
</div>

<div class="close-myprofs-btn-wrap">
  <a class="close-myprofs" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROF:Close', linkType:'o' } );">close</a>
</div>
	      </div>
      <!-- Ends My Profs Menu -->

    </div>
    <!-- Ends Left Menu -->

    <!-- Starts Left Nav -->
    <nav id="navToggle">
      <ul>

        <li>
          <a href="#" class="menu-item" id="profNav" data-menu="profMenu" >
            <span class="icon icon-professor"></span>
            <span class="label">Profs</span>
          </a>
        </li>
        <li>
          <a href="#" class="menu-item" id="schoolNav" data-menu="schoolMenu" >
            <span class="icon icon-school"></span>
            <span class="label">School</span>
          </a>
        </li>
        <li>
          <a href="#" class="menu-item" data-menu="rateMenu">
            <span class="icon icon-rate"></span>
            <span class="label">Rate</span>
          </a>
        </li>
        <li>
          <a href="#" class="menu-item" id="blogNav" data-menu="blogMenu">
            <span class="icon icon-blog"></span>
            <span class="label">Blog</span>
          </a>
        </li>

        <li id="desktopmyProfContainer" class="hide">
            <a href="#" class="menu-item" data-menu="myProfsMenu">
                <div class = "my-prof-notice">Click here to see all your saved professors.</div>
                <span class="icon icon-my-profs"></span>
                <span class="label">Saved</span>
            </a>
         </li>

      </ul>

    </nav>
    <!-- Ends left Nav -->

  </aside>

        <!-- Ends Left Nav -->

        
<div class="sticky-wrapper slide">
	
	<div class="ad GAM">
		<div id='ad_lb_top'></div>
	</div>
</div>
      

      <!-- Starts Body Content -->

      <div id="body" class="slide sticky-shown">
        <div id="mainContent" class="height-col">
          
    <div class="right-panel">
      <div class="info-container">
        <div class="top-info-block" style="float:left;">
          <!-- <div class="top-ad" id="top-ad"></div> -->
          <div class="result-info">
            <div class="result-image">
              
            </div>
            <div class="result-name">
              <h1 class="profname">
                <span class="pfname"> Ryan</span> <span
                    class="pfname"> </span> <span
                    class="plname">
                  Carroll
                </span>
              </h1>
              
            </div>
            <div class="result-title">
              Professor in the Physical Science department
              <br/>
              <h2 class="schoolname">at <a href="/campusRatings.jsp?sid=2378" class="school">Long Beach City College</a>, Long Beach, CA</h2>
              <!-- Can bring this back any time. This is for Rutgers video tours.
              <div class="videoArea">
                <div class="videoTour">
                  Campus Video Tour
                </div>
                <img class="play_button" src="assets/play_button.png" style="vertical-align: bottom; margin-left: -7px; cursor: pointer;"></img>
              </div> -->
              
                
                  <a href="/joinprof.jsp" id="areyouquestion" >are you Ryan?</a>
                
              
            </div>
            <div class="secondary-buttons">
              
              
            </div>
          </div>
          <!-- 
           -->
          <div class="actions">
            
              <a href="/AddRating.jsp?tid=2093080" class="rate" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:&#39;PROF:Rate_top&#39;, linkType:&#39;o&#39; } )">Rate This Professor</a>
              <div class="share">
                Share
                <div class="share-intent">
                  <a class="desktop intent-facebook icon-facebook"
                      target="_blank" href="http://www.facebook.com/sharer.php?s=100&amp;p[url]=www.ratemyprofessors.com/ShowRatings.jsp?tid=2093080"
                      onclick="window.open(this.href,'targetWindowFacebook','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600px,height=300px');  javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROF:Facebook', linkType:'o' } ); return false;"></a>
                  <a class="mobile-block intent-facebook icon-facebook"
                      target="_blank" href="http://m.facebook.com/sharer.php?s=100&amp;u=www.ratemyprofessors.com/ShowRatings.jsp?tid=2093080"
                      onclick="window.open(this.href,'targetWindowFacebook','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600px,height=300px'); javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROF:Facebook', linkType:'o' } ); return false;"></a>
                  <a
                      href="https://twitter.com/intent/tweet?text=Youve gotta check out Ryan Carroll on %40RateMyProfessor - www.ratemyprofessors.com%2FShowRatings.jsp%3Ftid%3D2093080"
                      target="_blank" class="intent-twitter icon-twitter"
                      onclick="window.open(this.href,'targetWindowTwitter','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600px,height=300px'); javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROF:Twitter', linkType:'o' } ); return false;"></a>
                </div>
              </div>
            
            <div class="links">
              <a href="/submitCorrection.jsp?tid=2093080" class="correction">Submit a Correction</a>
              <a href="/help.jsp#tally" class="correction">| Learn how ratings work</a>
            </div>
          </div>
        </div>
        
          <div class="relatedTeachers">
            
              <span class="relatedTeachers__label desktop">Check out similar Professors in the Physical Science Department</span>
            
            <span class="relatedTeachers__label mobile">Compare with Similar Professors</span>
  
            <ul class="relatedTeachers__list">
              
                <li>
                  <a href="/ShowRatings.jsp?tid=2368618" target="_blank">
                    Ramirez, Jorge<span class="relatedTeachers__score"> 5.00</span>
                  </a> 
                </li>
              
                <li>
                  <a href="/ShowRatings.jsp?tid=1871205" target="_blank">
                    Lazarus, Laura<span class="relatedTeachers__score"> 5.00</span>
                  </a> 
                </li>
              
                <li>
                  <a href="/ShowRatings.jsp?tid=1904857" target="_blank">
                    Sirajuddin, Ayesha<span class="relatedTeachers__score"> 4.50</span>
                  </a> 
                </li>
              
            </ul>
          </div>
        

        <div class="spacer" style="clear:both;"></div>
      </div>
      <div id="ad728" class="ad GAM banner right-panelmatvnad">
	<div id='ad_lb_01'></div>
</div>

      <div class="rating-breakdown">

        <div class="left-breakdown">
          <span class="take-again-help-text help-text">
            Percentage excludes ratings added prior to 05/25/16.
          </span>
          <div class="breakdown-wrapper">
            <div class="breakdown-header quality-header">
              <div class="breakdown-container quality">
                <div>
                  Overall Quality
                  <div class="grade" title="">2.5</div>
                </div>
              </div>
            </div>
            <div class="breakdown-header">

              <div class="breakdown-section takeAgain 29">
                <span class="title-container">
                  <!-- <div class="title"> -->
                    Would Take Again
                  <!-- </div> -->
                  <div class="help-toggle" data-target=".take-again-help-text"></div>
                  </span>
                <div class="grade" title="">
                  29%
                </div>
              </div>
              <div class="breakdown-section difficulty">
                Level of Difficulty
                <div class="grade" title="">
                  4.3
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div class="right-breakdown">
          <div class="tag-box-header">Tags for this Professor</div>
          <p>See how other students describe this professor.</p>
          <div class="tag-box">
            
              <span class="tag-box-choosetags"> Tough grader <b>(9)</b></span>
            
              <span class="tag-box-choosetags"> Lots of homework <b>(3)</b></span>
            
              <span class="tag-box-choosetags"> Amazing lectures <b>(3)</b></span>
            
              <span class="tag-box-choosetags"> Get ready to read <b>(3)</b></span>
            
              <span class="tag-box-choosetags"> Inspirational <b>(2)</b></span>
            
              <span class="tag-box-choosetags"> Skip class? You won't pass. <b>(2)</b></span>
            
              <span class="tag-box-choosetags"> Lecture heavy <b>(2)</b></span>
            
              <span class="tag-box-choosetags"> Graded by few things <b>(1)</b></span>
            
              <span class="tag-box-choosetags"> Test heavy <b>(1)</b></span>
            
              <span class="tag-box-choosetags"> Respected <b>(1)</b></span>
            
          </div>
          
            <a href="#" data-animation="none" data-reveal-id="chooseTagModal" class="choosetags" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROF:Tags', linkType:'o' } );">Choose your tags</a>
          
        </div>
      </div>
      
<div class="adRail sticky">

  
  <div class="ad GAM">
    <div id='ad_rec_01'></div>
  </div>

  
  <div class="ad GAM">
    <div id='ad_rec_02'></div>
  </div>

  
  <div id="taboola-right-rail-thumbnails"  class="hidden-sm"></div>
  <script type="text/javascript">
    var mobile = window.matchMedia("(max-width: 767px)").matches;
    if(RMP.Settings.ads.adTemplate.taboola === 2 && !mobile) {
      window._taboola = window._taboola || [];
      _taboola.push({
        mode: 'thumbnails-rr',
        container: 'taboola-right-rail-thumbnails',
        placement: 'Right Rail Thumbnails',
        target_type: 'mix'
      });
    }
  </script>

</div>

      <div class="table-toggle rating-count active" data-table="rating-filter">
        14 Student Ratings
      </div>
      <div class="table-toggle professor-note" data-table="professor-notes" style="display:none" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROF:Notes', linkType:'o' } );">
        
          0 Professor Notes
        
      </div>
      <form action="/AddRating.jsp?tid=2093080" method="post" name="sratingCommentForm" id="sratingCommentForm" >
      <div class="srating-Comments-text">
        <div class="input">
          <div class="input">
            <textarea name="sratingComments" id="sratingComments" class="field autoExpand" rows="1" maxlength="350" placeholder="Start typing your comment..."></textarea>
            <div id="sratingCount" class="character-count"><span>350</span> characters left</div>
          </div>
          <input type="hidden" name="fromContinueRating" id="fromContinueRating" class="field" value="1"/>
        </div>
        <div class="submit-form">
          
                          <input type="submit" value="Continue Your Rating" name="sratingSubmit" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:&#39;PROF:CommentContinue&#39;, linkType:&#39;o&#39; } );" id="sratingSubmit" />
          
        </div>
      </div>

    </form>
      <!-- If there is a note Show it -->
      <!-- Ends the note -->
      <div class="rating-filter togglable">

        <div class="read-more">
          <table class="tftable" border="0">
            <tr>
              <th class="head-label rating-level rating">
                <span class="sort-type" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROF:SortRatings', linkType:'o' } );">Rating: <span class="class-code">All</span></span>
                <span class="selected-type"></span>
                <div class="drop-down" id="ratingDrop" data-sort-type="rating">
                  <div class="drop-wrap">
                    <div class="option rating-all" data-sortby="rating-all">
                      <span class="icon-title">All Ratings</span>
                    </div>
                    <div class="option " data-sortby="rating-good" >
                      <span class="icon good-icon"></span>
                      <span class="icon-title">Good</span>
                    </div>
                    <div class="option" data-sortby="rating-average">
                      <span class="icon average-icon"></span>
                      <span class="icon-title">Average</span>
                    </div>
                    <div class="option" data-sortby="rating-poor">
                      <span class="icon poor-icon"></span>
                      <span class="icon-title">Poor</span>
                    </div>
                  </div>
                </div>
              </th>
              <th class="head-label class">
                <span class="sort-type">Class</span>
                <span class="selected-type"></span>
                <div class="drop-down" id="classDrop" data-sort-type="rating">
                  <div class="drop-wrap">
                    <div class="option rating-all" data-sortby="class-all">
                      <span class="icon-title" id="all-classes">All Classes</span>
                    </div>
                  </div>
                </div>
              </th>
              <th class="comment-nodropdown">
                <span class="sort-type">Comment</span>
              </th>
            </tr>
            <!-- Iterate Through professor Ratings -->
            
            
              
              <tr id="31339821" class = "">
                <td class="rating">
                  <div class="date"> 02/06/2019</div>
                  <div class="rating-block awful">
                    <div class="rating-wrapper">
                      <div class="icon awful-icon"></div>
                      <span class="rating-type">awful</span>
                    </div>
                    <div class="breakdown">
                      <div class="break">
                        <div class="descriptor-container">
                          <span class="score poor">1.0</span>
                          <span class="descriptor">Overall Quality</span>
                        </div>
                      </div>
                      <div class="break">
                        <div class="descriptor-container">
                          <span class="score inverse good">5.0</span>
                          <span class="descriptor">Level of Difficulty</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="class">
                  <span class="name "> <span class="response">PHYS3B</span></span>
                  <span class="credit">For Credit: <span class="response">Yes</span></span>
                  <span class="attendance">Attendance: <span class="response">Mandatory</span></span>

                  <span class="textbook-used">Textbook Used: <span class="response">No</span></span>
                  <span class="would-take-again">Would Take Again: <span class="response">No</span></span>
                  <span class="grade">Grade Received: <span class="response">B</span></span>

                  
                </td>
                
                  <td class="comments">
                  <div class="tagbox">
                    
                        <span>TOUGH GRADER</span>
                    
                        <span>GET READY TO READ</span>
                    
                        <span>LOTS OF HOMEWORK</span>
                    
                  </div>

                  <p class="commentsParagraph">
                      Carroll is awful, doesn't answer students questions and makes everyone learn a multiple new programs just for the lab. His syllabus and lectures are extremely unorganized.
                  </p>

                  
                    <div class="helpful-links thumbs">
                      <a href="#" data-id="31339821"
                          data-url="/teacherRating/updateTeacherRatingHelp/31339821"
                          data-tid="2093080" class="helpful" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROF:Useful', linkType:'o' } );"><span
                          class="count">
                          2
                      </span> <span class="grouping">people</span>
                        found this useful </a>
                      <a href="#"
                          data-id="31339821"
                          data-url="/teacherRating/updateTeacherRatingHelp/31339821"
                          data-tid="2093080" class="nothelpful" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROF:NotUseful', linkType:'o' } );"><span
                          class="count">
                          0
                      </span> <span class="grouping">people</span>
                        did not find this useful</a>
                    </div>
                  
                  <div class="helpful-links">
                    
                      <a href="/flagTeacherRating.jsp?rid=31339821" rel="nofollow" class="report" data-report-text="Carroll is awful, doesn&#39;t answer students questions and makes everyone learn a multiple new programs just for the lab. His syllabus and lectures are extremely unorganized.">report this rating</a>
                    
                  </div>
                </td>
              

              </tr>
              <!-- Place ad after first three ratings -->
              

              

            
              
              <tr id="31252630" class = "even">
                <td class="rating">
                  <div class="date"> 01/13/2019</div>
                  <div class="rating-block awesome">
                    <div class="rating-wrapper">
                      <div class="icon awesome-icon"></div>
                      <span class="rating-type">awesome</span>
                    </div>
                    <div class="breakdown">
                      <div class="break">
                        <div class="descriptor-container">
                          <span class="score good">5.0</span>
                          <span class="descriptor">Overall Quality</span>
                        </div>
                      </div>
                      <div class="break">
                        <div class="descriptor-container">
                          <span class="score inverse good">5.0</span>
                          <span class="descriptor">Level of Difficulty</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="class">
                  <span class="name "> <span class="response">PHYS3A</span></span>
                  <span class="credit">For Credit: <span class="response">Yes</span></span>
                  <span class="attendance">Attendance: <span class="response">Mandatory</span></span>

                  <span class="textbook-used">Textbook Used: <span class="response">Yes</span></span>
                  <span class="would-take-again">Would Take Again: <span class="response">Yes</span></span>
                  <span class="grade">Grade Received: <span class="response">B-</span></span>

                  
                </td>
                
                  <td class="comments">
                  <div class="tagbox">
                    
                        <span>RESPECTED</span>
                    
                        <span>INSPIRATIONAL</span>
                    
                        <span>AMAZING LECTURES</span>
                    
                  </div>

                  <p class="commentsParagraph">
                      Prof Carrolls courses are difficult, but dont let that scare you away! Hes there with you every step of the way, and you will be amazed at what you can accomplish by the end of the class. Believe in yourself, because Prof Carroll believes you can do it.
                  </p>

                  
                    <div class="helpful-links thumbs">
                      <a href="#" data-id="31252630"
                          data-url="/teacherRating/updateTeacherRatingHelp/31252630"
                          data-tid="2093080" class="helpful" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROF:Useful', linkType:'o' } );"><span
                          class="count">
                          0
                      </span> <span class="grouping">people</span>
                        found this useful </a>
                      <a href="#"
                          data-id="31252630"
                          data-url="/teacherRating/updateTeacherRatingHelp/31252630"
                          data-tid="2093080" class="nothelpful" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROF:NotUseful', linkType:'o' } );"><span
                          class="count">
                          2
                      </span> <span class="grouping">people</span>
                        did not find this useful</a>
                    </div>
                  
                  <div class="helpful-links">
                    
                      <a href="/flagTeacherRating.jsp?rid=31252630" rel="nofollow" class="report" data-report-text="Prof Carrolls courses are difficult, but dont let that scare you away! Hes there with you every step of the way, and you will be amazed at what you can accomplish by the end of the class. Believe in yourself, because Prof Carroll believes you can do it.">report this rating</a>
                    
                  </div>
                </td>
              

              </tr>
              <!-- Place ad after first three ratings -->
              

              

            
              
              <tr id="30885816" class = "">
                <td class="rating">
                  <div class="date"> 12/05/2018</div>
                  <div class="rating-block awful">
                    <div class="rating-wrapper">
                      <div class="icon awful-icon"></div>
                      <span class="rating-type">awful</span>
                    </div>
                    <div class="breakdown">
                      <div class="break">
                        <div class="descriptor-container">
                          <span class="score poor">1.0</span>
                          <span class="descriptor">Overall Quality</span>
                        </div>
                      </div>
                      <div class="break">
                        <div class="descriptor-container">
                          <span class="score inverse good">4.0</span>
                          <span class="descriptor">Level of Difficulty</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="class">
                  <span class="name "> <span class="response">PHYS3B</span></span>
                  <span class="credit">For Credit: <span class="response">No</span></span>
                  <span class="attendance">Attendance: <span class="response">Not Mandatory</span></span>

                  <span class="textbook-used">Textbook Used: <span class="response">No</span></span>
                  <span class="would-take-again">Would Take Again: <span class="response">No</span></span>
                  <span class="grade">Grade Received: <span class="response">C</span></span>

                  
                </td>
                
                  <td class="comments">
                  <div class="tagbox">
                    
                        <span>LOTS OF HOMEWORK</span>
                    
                        <span>TOUGH GRADER</span>
                    
                  </div>

                  <p class="commentsParagraph">
                      The formal labs are required to be written on a garbage coding program. So he wants you to go to his office so he can teach it to you. Good luck if youre taking 15 units of STEM classes like I am or if you work on top of school. He gives old exam probs in preparation for a new exam but doesnt give you the answer, you have to go to his office
                  </p>

                  
                    <div class="helpful-links thumbs">
                      <a href="#" data-id="30885816"
                          data-url="/teacherRating/updateTeacherRatingHelp/30885816"
                          data-tid="2093080" class="helpful" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROF:Useful', linkType:'o' } );"><span
                          class="count">
                          3
                      </span> <span class="grouping">people</span>
                        found this useful </a>
                      <a href="#"
                          data-id="30885816"
                          data-url="/teacherRating/updateTeacherRatingHelp/30885816"
                          data-tid="2093080" class="nothelpful" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROF:NotUseful', linkType:'o' } );"><span
                          class="count">
                          0
                      </span> <span class="grouping">people</span>
                        did not find this useful</a>
                    </div>
                  
                  <div class="helpful-links">
                    
                      <a href="/flagTeacherRating.jsp?rid=30885816" rel="nofollow" class="report" data-report-text="The formal labs are required to be written on a garbage coding program. So he wants you to go to his office so he can teach it to you. Good luck if youre taking 15 units of STEM classes like I am or if you work on top of school. He gives old exam probs in preparation for a new exam but doesnt give you the answer, you have to go to his office">report this rating</a>
                    
                  </div>
                </td>
              

              </tr>
              <!-- Place ad after first three ratings -->
              

              

            
              
              <tr id="30353471" class = "even">
                <td class="rating">
                  <div class="date"> 07/18/2018</div>
                  <div class="rating-block poor">
                    <div class="rating-wrapper">
                      <div class="icon poor-icon"></div>
                      <span class="rating-type">poor</span>
                    </div>
                    <div class="breakdown">
                      <div class="break">
                        <div class="descriptor-container">
                          <span class="score average">2.0</span>
                          <span class="descriptor">Overall Quality</span>
                        </div>
                      </div>
                      <div class="break">
                        <div class="descriptor-container">
                          <span class="score inverse good">4.0</span>
                          <span class="descriptor">Level of Difficulty</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="class">
                  <span class="name "> <span class="response">PHYS3A</span></span>
                  <span class="credit">For Credit: <span class="response">Yes</span></span>
                  <span class="attendance">Attendance: <span class="response">N/A</span></span>

                  <span class="textbook-used">Textbook Used: <span class="response">No</span></span>
                  <span class="would-take-again">Would Take Again: <span class="response">No</span></span>
                  <span class="grade">Grade Received: <span class="response">WD</span></span>

                  
                </td>
                
                  <td class="comments">
                  <div class="tagbox">
                    
                        <span>TOUGH GRADER</span>
                    
                  </div>

                  <p class="commentsParagraph">
                      You really have to work for your grade. You also need a very good understanding of physics to pass. The class is mostly math, but you need to really understand it in order to do the applications. You have to use a program like LaTeX to do your lab reports.
                  </p>

                  
                    <div class="helpful-links thumbs">
                      <a href="#" data-id="30353471"
                          data-url="/teacherRating/updateTeacherRatingHelp/30353471"
                          data-tid="2093080" class="helpful" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROF:Useful', linkType:'o' } );"><span
                          class="count">
                          0
                      </span> <span class="grouping">people</span>
                        found this useful </a>
                      <a href="#"
                          data-id="30353471"
                          data-url="/teacherRating/updateTeacherRatingHelp/30353471"
                          data-tid="2093080" class="nothelpful" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROF:NotUseful', linkType:'o' } );"><span
                          class="count">
                          0
                      </span> <span class="grouping">people</span>
                        did not find this useful</a>
                    </div>
                  
                  <div class="helpful-links">
                    
                      <a href="/flagTeacherRating.jsp?rid=30353471" rel="nofollow" class="report" data-report-text="You really have to work for your grade. You also need a very good understanding of physics to pass. The class is mostly math, but you need to really understand it in order to do the applications. You have to use a program like LaTeX to do your lab reports.">report this rating</a>
                    
                  </div>
                </td>
              

              </tr>
              <!-- Place ad after first three ratings -->
              

              

            
              
              <tr id="30216688" class = "">
                <td class="rating">
                  <div class="date"> 05/31/2018</div>
                  <div class="rating-block poor">
                    <div class="rating-wrapper">
                      <div class="icon poor-icon"></div>
                      <span class="rating-type">poor</span>
                    </div>
                    <div class="breakdown">
                      <div class="break">
                        <div class="descriptor-container">
                          <span class="score average">2.0</span>
                          <span class="descriptor">Overall Quality</span>
                        </div>
                      </div>
                      <div class="break">
                        <div class="descriptor-container">
                          <span class="score inverse good">5.0</span>
                          <span class="descriptor">Level of Difficulty</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="class">
                  <span class="name "> <span class="response">ASTR1</span></span>
                  <span class="credit">For Credit: <span class="response">Yes</span></span>
                  <span class="attendance">Attendance: <span class="response">Not Mandatory</span></span>

                  <span class="textbook-used">Textbook Used: <span class="response">No</span></span>
                  <span class="would-take-again">Would Take Again: <span class="response">No</span></span>
                  <span class="grade">Grade Received: <span class="response">C</span></span>

                  
                </td>
                
                  <td class="comments">
                  <div class="tagbox">
                    
                        <span>LOTS OF HOMEWORK</span>
                    
                        <span>TOUGH GRADER</span>
                    
                        <span>TEST HEAVY</span>
                    
                  </div>

                  <p class="commentsParagraph">
                      I think the professor has really good intentions and he definitely teaches the material, but I think that if you easily get lost, that he is possibly too smart to understand why you can't catch up or don't get what's going on. Homework is helpful but the tests are quite hard. I think that the tests are mostly what's on the homework.
                  </p>

                  
                    <div class="helpful-links thumbs">
                      <a href="#" data-id="30216688"
                          data-url="/teacherRating/updateTeacherRatingHelp/30216688"
                          data-tid="2093080" class="helpful" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROF:Useful', linkType:'o' } );"><span
                          class="count">
                          0
                      </span> <span class="grouping">people</span>
                        found this useful </a>
                      <a href="#"
                          data-id="30216688"
                          data-url="/teacherRating/updateTeacherRatingHelp/30216688"
                          data-tid="2093080" class="nothelpful" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROF:NotUseful', linkType:'o' } );"><span
                          class="count">
                          0
                      </span> <span class="grouping">people</span>
                        did not find this useful</a>
                    </div>
                  
                  <div class="helpful-links">
                    
                      <a href="/flagTeacherRating.jsp?rid=30216688" rel="nofollow" class="report" data-report-text="I think the professor has really good intentions and he definitely teaches the material, but I think that if you easily get lost, that he is possibly too smart to understand why you can&#39;t catch up or don&#39;t get what&#39;s going on. Homework is helpful but the tests are quite hard. I think that the tests are mostly what&#39;s on the homework.">report this rating</a>
                    
                  </div>
                </td>
              

              </tr>
              <!-- Place ad after first three ratings -->
              

              

            
              
              <tr id="29391851" class = "even">
                <td class="rating">
                  <div class="date"> 01/04/2018</div>
                  <div class="rating-block average">
                    <div class="rating-wrapper">
                      <div class="icon average-icon"></div>
                      <span class="rating-type">average</span>
                    </div>
                    <div class="breakdown">
                      <div class="break">
                        <div class="descriptor-container">
                          <span class="score average">3.0</span>
                          <span class="descriptor">Overall Quality</span>
                        </div>
                      </div>
                      <div class="break">
                        <div class="descriptor-container">
                          <span class="score inverse good">4.0</span>
                          <span class="descriptor">Level of Difficulty</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="class">
                  <span class="name "> <span class="response">PHYS3A</span></span>
                  <span class="credit">For Credit: <span class="response">Yes</span></span>
                  <span class="attendance">Attendance: <span class="response">Not Mandatory</span></span>

                  <span class="textbook-used">Textbook Used: <span class="response">Yes</span></span>
                  <span class="would-take-again">Would Take Again: <span class="response">Yes</span></span>
                  <span class="grade">Grade Received: <span class="response">B</span></span>

                  
                </td>
                
                  <td class="comments">
                  <div class="tagbox">
                    
                        <span>GET READY TO READ</span>
                    
                        <span>TOUGH GRADER</span>
                    
                  </div>

                  <p class="commentsParagraph">
                      This was not an easy class. He gives quizzes before he teaches the lesson. I see that no one has mentioned that. His exams are way harder than homework, so re-do problems and get comfortable. He is easy to access after class. Be descriptive with your labs to get full points. He allows study guides also read the chapter summary for help on quizzes.
                  </p>

                  
                    <div class="helpful-links thumbs">
                      <a href="#" data-id="29391851"
                          data-url="/teacherRating/updateTeacherRatingHelp/29391851"
                          data-tid="2093080" class="helpful" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROF:Useful', linkType:'o' } );"><span
                          class="count">
                          0
                      </span> <span class="grouping">people</span>
                        found this useful </a>
                      <a href="#"
                          data-id="29391851"
                          data-url="/teacherRating/updateTeacherRatingHelp/29391851"
                          data-tid="2093080" class="nothelpful" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROF:NotUseful', linkType:'o' } );"><span
                          class="count">
                          1
                      </span> <span class="grouping">person</span>
                        did not find this useful</a>
                    </div>
                  
                  <div class="helpful-links">
                    
                      <a href="/flagTeacherRating.jsp?rid=29391851" rel="nofollow" class="report" data-report-text="This was not an easy class. He gives quizzes before he teaches the lesson. I see that no one has mentioned that. His exams are way harder than homework, so re-do problems and get comfortable. He is easy to access after class. Be descriptive with your labs to get full points. He allows study guides also read the chapter summary for help on quizzes.">report this rating</a>
                    
                  </div>
                </td>
              

              </tr>
              <!-- Place ad after first three ratings -->
              

              
                <tr class="ad-placement-container">
                    <td colspan="4" class="ad-placement taboola">
                      
<div id="taboola-mid-article-thumbnails" class="taboola-mid-article"></div>
<script type="text/javascript">
  if(RMP.Settings.ads.adTemplate.taboola === 2) {
    window._taboola = window._taboola || [];
    _taboola.push({
      mode: 'thumbnails-c',
      container: 'taboola-mid-article-thumbnails',
      placement: 'Mid Article Thumbnails',
      target_type: 'mix'
    });
  }
</script>

                  </td>
                </tr>
              

            
              
              <tr id="28588154" class = "">
                <td class="rating">
                  <div class="date"> 08/05/2017</div>
                  <div class="rating-block awful">
                    <div class="rating-wrapper">
                      <div class="icon awful-icon"></div>
                      <span class="rating-type">awful</span>
                    </div>
                    <div class="breakdown">
                      <div class="break">
                        <div class="descriptor-container">
                          <span class="score poor">1.0</span>
                          <span class="descriptor">Overall Quality</span>
                        </div>
                      </div>
                      <div class="break">
                        <div class="descriptor-container">
                          <span class="score inverse good">4.0</span>
                          <span class="descriptor">Level of Difficulty</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="class">
                  <span class="name "> <span class="response">PHYS3B</span></span>
                  <span class="credit">For Credit: <span class="response">Yes</span></span>
                  <span class="attendance">Attendance: <span class="response">N/A</span></span>

                  <span class="textbook-used">Textbook Used: <span class="response">Yes</span></span>
                  <span class="would-take-again">Would Take Again: <span class="response">No</span></span>
                  <span class="grade">Grade Received: <span class="response">N/A</span></span>

                  
                </td>
                
                  <td class="comments">
                  <div class="tagbox">
                    
                  </div>

                  <p class="commentsParagraph">
                      Honestly, if you can take this course anywhere else, do it. Professor Carroll is a nice guy, but he is not a good instructor.
                  </p>

                  
                    <div class="helpful-links thumbs">
                      <a href="#" data-id="28588154"
                          data-url="/teacherRating/updateTeacherRatingHelp/28588154"
                          data-tid="2093080" class="helpful" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROF:Useful', linkType:'o' } );"><span
                          class="count">
                          2
                      </span> <span class="grouping">people</span>
                        found this useful </a>
                      <a href="#"
                          data-id="28588154"
                          data-url="/teacherRating/updateTeacherRatingHelp/28588154"
                          data-tid="2093080" class="nothelpful" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROF:NotUseful', linkType:'o' } );"><span
                          class="count">
                          1
                      </span> <span class="grouping">person</span>
                        did not find this useful</a>
                    </div>
                  
                  <div class="helpful-links">
                    
                      <a href="/flagTeacherRating.jsp?rid=28588154" rel="nofollow" class="report" data-report-text="Honestly, if you can take this course anywhere else, do it. Professor Carroll is a nice guy, but he is not a good instructor.">report this rating</a>
                    
                  </div>
                </td>
              

              </tr>
              <!-- Place ad after first three ratings -->
              

              

            
              
              <tr id="28131834" class = "even">
                <td class="rating">
                  <div class="date"> 04/26/2017</div>
                  <div class="rating-block poor">
                    <div class="rating-wrapper">
                      <div class="icon poor-icon"></div>
                      <span class="rating-type">poor</span>
                    </div>
                    <div class="breakdown">
                      <div class="break">
                        <div class="descriptor-container">
                          <span class="score average">2.0</span>
                          <span class="descriptor">Overall Quality</span>
                        </div>
                      </div>
                      <div class="break">
                        <div class="descriptor-container">
                          <span class="score inverse good">4.0</span>
                          <span class="descriptor">Level of Difficulty</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="class">
                  <span class="name "> <span class="response">PHYS3A</span></span>
                  <span class="credit">For Credit: <span class="response">Yes</span></span>
                  <span class="attendance">Attendance: <span class="response">N/A</span></span>

                  <span class="textbook-used">Textbook Used: <span class="response">No</span></span>
                  <span class="would-take-again">Would Take Again: <span class="response">No</span></span>
                  <span class="grade">Grade Received: <span class="response">N/A</span></span>

                  
                </td>
                
                  <td class="comments">
                  <div class="tagbox">
                    
                  </div>

                  <p class="commentsParagraph">
                      Tough class. He expects you to learn most of the material on your own, so his lectures can reinforce what youve learned. Hes not the best at explaining content, but not the worst either. The homework and tests are far more difficult than anything he shows you in class. He sets the bar pretty low though,only 80 for A,and he will curve grades as well
                  </p>

                  
                    <div class="helpful-links thumbs">
                      <a href="#" data-id="28131834"
                          data-url="/teacherRating/updateTeacherRatingHelp/28131834"
                          data-tid="2093080" class="helpful" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROF:Useful', linkType:'o' } );"><span
                          class="count">
                          0
                      </span> <span class="grouping">people</span>
                        found this useful </a>
                      <a href="#"
                          data-id="28131834"
                          data-url="/teacherRating/updateTeacherRatingHelp/28131834"
                          data-tid="2093080" class="nothelpful" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROF:NotUseful', linkType:'o' } );"><span
                          class="count">
                          0
                      </span> <span class="grouping">people</span>
                        did not find this useful</a>
                    </div>
                  
                  <div class="helpful-links">
                    
                      <a href="/flagTeacherRating.jsp?rid=28131834" rel="nofollow" class="report" data-report-text="Tough class. He expects you to learn most of the material on your own, so his lectures can reinforce what youve learned. Hes not the best at explaining content, but not the worst either. The homework and tests are far more difficult than anything he shows you in class. He sets the bar pretty low though,only 80 for A,and he will curve grades as well">report this rating</a>
                    
                  </div>
                </td>
              

              </tr>
              <!-- Place ad after first three ratings -->
              
                

                <!-- START: Ad Placement Row -->
                <tr class="ad-placement-container">
                  <td colspan="4" class="ad-placement">
                    
<!-- index: 1, actualIndex: 0, properID 1-->
<div class="ad banner right-panelmatvnad">
	<div id='ad_lb_02' class="GAM">
		<script>
			var validTemplates = [3,4]
			var googleTemplate = window.RMP.Settings.ads.adTemplate.google;
			if(validTemplates.indexOf(googleTemplate) > -1) {
				googletag.cmd.push(() => {
					window.RMP.addSlot({
						id: 'ad_lb_02',
						sizes: [[970, 90], [728, 90], [320, 50], [300, 50], [300, 250]],
						targeting: {
							pos: ,
							refresh: 'true'
						},
						sizeMappingSettings: [
							{
								threshold: [0, 0],
								sizes: [[300, 50], [320, 50], [300, 250]]
							},
							{
								threshold: [768, 0],
								sizes: [[300, 250]]
							},
							{
								threshold: [1370, 0],
								sizes: [[728, 90], [970, 90], [300, 250]]
							}
						]
					});
				});
			}
		</script>
	</div>

	<script>window.RMP.Settings.ads.lastAdIndex = 1;</script>
</div>
                  </td>
                </tr>
              <!-- Then place ad after every fith rating thereafter -->
              <!-- END: Ad Placement Row -->
              

              

            
              
              <tr id="27888466" class = "">
                <td class="rating">
                  <div class="date"> 03/08/2017</div>
                  <div class="rating-block awesome">
                    <div class="rating-wrapper">
                      <div class="icon awesome-icon"></div>
                      <span class="rating-type">awesome</span>
                    </div>
                    <div class="breakdown">
                      <div class="break">
                        <div class="descriptor-container">
                          <span class="score good">5.0</span>
                          <span class="descriptor">Overall Quality</span>
                        </div>
                      </div>
                      <div class="break">
                        <div class="descriptor-container">
                          <span class="score inverse good">5.0</span>
                          <span class="descriptor">Level of Difficulty</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="class">
                  <span class="name "> <span class="response">PHYS3B</span></span>
                  <span class="credit">For Credit: <span class="response">Yes</span></span>
                  <span class="attendance">Attendance: <span class="response">Not Mandatory</span></span>

                  <span class="textbook-used">Textbook Used: <span class="response">Yes</span></span>
                  <span class="would-take-again">Would Take Again: <span class="response">Yes</span></span>
                  <span class="grade">Grade Received: <span class="response">A+</span></span>

                  
                </td>
                
                  <td class="comments">
                  <div class="tagbox">
                    
                        <span>AMAZING LECTURES</span>
                    
                        <span>INSPIRATIONAL</span>
                    
                        <span>LECTURE HEAVY</span>
                    
                  </div>

                  <p class="commentsParagraph">
                      Ryan Carroll is the best professor you can take for physics 3B. He knows the subject very well and has clean notes. There is a curve at the end of the course. I love how he taugh this class the proper way using calculus and not shortcuts which can be confusing.
                  </p>

                  
                    <div class="helpful-links thumbs">
                      <a href="#" data-id="27888466"
                          data-url="/teacherRating/updateTeacherRatingHelp/27888466"
                          data-tid="2093080" class="helpful" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROF:Useful', linkType:'o' } );"><span
                          class="count">
                          2
                      </span> <span class="grouping">people</span>
                        found this useful </a>
                      <a href="#"
                          data-id="27888466"
                          data-url="/teacherRating/updateTeacherRatingHelp/27888466"
                          data-tid="2093080" class="nothelpful" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROF:NotUseful', linkType:'o' } );"><span
                          class="count">
                          4
                      </span> <span class="grouping">people</span>
                        did not find this useful</a>
                    </div>
                  
                  <div class="helpful-links">
                    
                      <img src="/assets/ok.png" title="This comment can no longer be reported."/>
                    
                  </div>
                </td>
              

              </tr>
              <!-- Place ad after first three ratings -->
              

              

            
              
              <tr id="27859172" class = "even">
                <td class="rating">
                  <div class="date"> 02/26/2017</div>
                  <div class="rating-block poor">
                    <div class="rating-wrapper">
                      <div class="icon poor-icon"></div>
                      <span class="rating-type">poor</span>
                    </div>
                    <div class="breakdown">
                      <div class="break">
                        <div class="descriptor-container">
                          <span class="score average">2.0</span>
                          <span class="descriptor">Overall Quality</span>
                        </div>
                      </div>
                      <div class="break">
                        <div class="descriptor-container">
                          <span class="score inverse good">5.0</span>
                          <span class="descriptor">Level of Difficulty</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="class">
                  <span class="name "> <span class="response">PHYS3A</span></span>
                  <span class="credit">For Credit: <span class="response">Yes</span></span>
                  <span class="attendance">Attendance: <span class="response">Mandatory</span></span>

                  <span class="textbook-used">Textbook Used: <span class="response">Yes</span></span>
                  <span class="would-take-again">Would Take Again: <span class="response">No</span></span>
                  <span class="grade">Grade Received: <span class="response">B</span></span>

                  
                </td>
                
                  <td class="comments">
                  <div class="tagbox">
                    
                        <span>GET READY TO READ</span>
                    
                        <span>TOUGH GRADER</span>
                    
                        <span>SKIP CLASS? YOU WON'T PASS.</span>
                    
                  </div>

                  <p class="commentsParagraph">
                      Had last semester, test questions are way too hard & don't reflect work in class. The good thing is he curves the grades. I barely learned anything, but participated in the labs and tried on the tests. Ended up with what should have been a 'D' percentage wise, but got a 'B'. Recommend Zatkarhov instead, taking him for 3B & am understanding more.
                  </p>

                  
                    <div class="helpful-links thumbs">
                      <a href="#" data-id="27859172"
                          data-url="/teacherRating/updateTeacherRatingHelp/27859172"
                          data-tid="2093080" class="helpful" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROF:Useful', linkType:'o' } );"><span
                          class="count">
                          1
                      </span> <span class="grouping">person</span>
                        found this useful </a>
                      <a href="#"
                          data-id="27859172"
                          data-url="/teacherRating/updateTeacherRatingHelp/27859172"
                          data-tid="2093080" class="nothelpful" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROF:NotUseful', linkType:'o' } );"><span
                          class="count">
                          0
                      </span> <span class="grouping">people</span>
                        did not find this useful</a>
                    </div>
                  
                  <div class="helpful-links">
                    
                      <a href="/flagTeacherRating.jsp?rid=27859172" rel="nofollow" class="report" data-report-text="Had last semester, test questions are way too hard &amp; don&#39;t reflect work in class. The good thing is he curves the grades. I barely learned anything, but participated in the labs and tried on the tests. Ended up with what should have been a &#39;D&#39; percentage wise, but got a &#39;B&#39;. Recommend Zatkarhov instead, taking him for 3B &amp; am understanding more.">report this rating</a>
                    
                  </div>
                </td>
              

              </tr>
              <!-- Place ad after first three ratings -->
              

              

            
              
              <tr id="27635510" class = "">
                <td class="rating">
                  <div class="date"> 12/28/2016</div>
                  <div class="rating-block poor">
                    <div class="rating-wrapper">
                      <div class="icon poor-icon"></div>
                      <span class="rating-type">poor</span>
                    </div>
                    <div class="breakdown">
                      <div class="break">
                        <div class="descriptor-container">
                          <span class="score average">2.0</span>
                          <span class="descriptor">Overall Quality</span>
                        </div>
                      </div>
                      <div class="break">
                        <div class="descriptor-container">
                          <span class="score inverse good">4.0</span>
                          <span class="descriptor">Level of Difficulty</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="class">
                  <span class="name "> <span class="response">ASTRO1</span></span>
                  <span class="credit">For Credit: <span class="response">Yes</span></span>
                  <span class="attendance">Attendance: <span class="response">Mandatory</span></span>

                  <span class="textbook-used">Textbook Used: <span class="response">No</span></span>
                  <span class="would-take-again">Would Take Again: <span class="response">No</span></span>
                  <span class="grade">Grade Received: <span class="response">N/A</span></span>

                  
                </td>
                
                  <td class="comments">
                  <div class="tagbox">
                    
                        <span>TOUGH GRADER</span>
                    
                        <span>LECTURE HEAVY</span>
                    
                        <span>GRADED BY FEW THINGS</span>
                    
                  </div>

                  <p class="commentsParagraph">
                      Take this class if you are a physical science major. If it's just for a GE, STAY AWAY! Not an easy class at all. He doesn't explain things well at all. Sometimes was interactive but mostly just talked the whole time. Easy to fall asleep in the Observatory, but don't do it or you'll miss everything. Tests are long and hard. Not a fun class.
                  </p>

                  
                    <div class="helpful-links thumbs">
                      <a href="#" data-id="27635510"
                          data-url="/teacherRating/updateTeacherRatingHelp/27635510"
                          data-tid="2093080" class="helpful" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROF:Useful', linkType:'o' } );"><span
                          class="count">
                          0
                      </span> <span class="grouping">people</span>
                        found this useful </a>
                      <a href="#"
                          data-id="27635510"
                          data-url="/teacherRating/updateTeacherRatingHelp/27635510"
                          data-tid="2093080" class="nothelpful" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROF:NotUseful', linkType:'o' } );"><span
                          class="count">
                          0
                      </span> <span class="grouping">people</span>
                        did not find this useful</a>
                    </div>
                  
                  <div class="helpful-links">
                    
                      <a href="/flagTeacherRating.jsp?rid=27635510" rel="nofollow" class="report" data-report-text="Take this class if you are a physical science major. If it&#39;s just for a GE, STAY AWAY! Not an easy class at all. He doesn&#39;t explain things well at all. Sometimes was interactive but mostly just talked the whole time. Easy to fall asleep in the Observatory, but don&#39;t do it or you&#39;ll miss everything. Tests are long and hard. Not a fun class.">report this rating</a>
                    
                  </div>
                </td>
              

              </tr>
              <!-- Place ad after first three ratings -->
              

              

            
              
              <tr id="27004067" class = "even">
                <td class="rating">
                  <div class="date"> 09/30/2016</div>
                  <div class="rating-block awesome">
                    <div class="rating-wrapper">
                      <div class="icon awesome-icon"></div>
                      <span class="rating-type">awesome</span>
                    </div>
                    <div class="breakdown">
                      <div class="break">
                        <div class="descriptor-container">
                          <span class="score good">5.0</span>
                          <span class="descriptor">Overall Quality</span>
                        </div>
                      </div>
                      <div class="break">
                        <div class="descriptor-container">
                          <span class="score inverse good">5.0</span>
                          <span class="descriptor">Level of Difficulty</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="class">
                  <span class="name "> <span class="response">PHYS3B</span></span>
                  <span class="credit">For Credit: <span class="response">Yes</span></span>
                  <span class="attendance">Attendance: <span class="response">Not Mandatory</span></span>

                  <span class="textbook-used">Textbook Used: <span class="response">Yes</span></span>
                  <span class="would-take-again">Would Take Again: <span class="response">Yes</span></span>
                  <span class="grade">Grade Received: <span class="response">A</span></span>

                  
                </td>
                
                  <td class="comments">
                  <div class="tagbox">
                    
                        <span>TOUGH GRADER</span>
                    
                        <span>AMAZING LECTURES</span>
                    
                  </div>

                  <p class="commentsParagraph">
                      For electromagnetism, this professor did an amazing job at teaching. I honestly took notes that he wrote on board and used those to do the homework and study for exams. He tough physics the right way using calculus instead of those shortcuts. I am glad I had him for my phys3B class.
                  </p>

                  
                    <div class="helpful-links thumbs">
                      <a href="#" data-id="27004067"
                          data-url="/teacherRating/updateTeacherRatingHelp/27004067"
                          data-tid="2093080" class="helpful" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROF:Useful', linkType:'o' } );"><span
                          class="count">
                          0
                      </span> <span class="grouping">people</span>
                        found this useful </a>
                      <a href="#"
                          data-id="27004067"
                          data-url="/teacherRating/updateTeacherRatingHelp/27004067"
                          data-tid="2093080" class="nothelpful" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROF:NotUseful', linkType:'o' } );"><span
                          class="count">
                          2
                      </span> <span class="grouping">people</span>
                        did not find this useful</a>
                    </div>
                  
                  <div class="helpful-links">
                    
                      <img src="/assets/ok.png" title="This comment can no longer be reported."/>
                    
                  </div>
                </td>
              

              </tr>
              <!-- Place ad after first three ratings -->
              

              

            
              
              <tr id="26977500" class = "">
                <td class="rating">
                  <div class="date"> 09/16/2016</div>
                  <div class="rating-block awful">
                    <div class="rating-wrapper">
                      <div class="icon awful-icon"></div>
                      <span class="rating-type">awful</span>
                    </div>
                    <div class="breakdown">
                      <div class="break">
                        <div class="descriptor-container">
                          <span class="score poor">1.0</span>
                          <span class="descriptor">Overall Quality</span>
                        </div>
                      </div>
                      <div class="break">
                        <div class="descriptor-container">
                          <span class="score inverse average">3.0</span>
                          <span class="descriptor">Level of Difficulty</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="class">
                  <span class="name "> <span class="response">PHYS3A</span></span>
                  <span class="credit">For Credit: <span class="response">Yes</span></span>
                  <span class="attendance">Attendance: <span class="response">Not Mandatory</span></span>

                  <span class="textbook-used">Textbook Used: <span class="response">Yes</span></span>
                  <span class="would-take-again">Would Take Again: <span class="response">No</span></span>
                  <span class="grade">Grade Received: <span class="response">N/A</span></span>

                  
                </td>
                
                  <td class="comments">
                  <div class="tagbox">
                    
                        <span>TOUGH GRADER</span>
                    
                        <span>SKIP CLASS? YOU WON'T PASS.</span>
                    
                  </div>

                  <p class="commentsParagraph">
                      Honestly he really doesn't explain the material very well.  His whole philosophy is more or less here is how you use a hammer, now go design and build a house.
                  </p>

                  
                    <div class="helpful-links thumbs">
                      <a href="#" data-id="26977500"
                          data-url="/teacherRating/updateTeacherRatingHelp/26977500"
                          data-tid="2093080" class="helpful" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROF:Useful', linkType:'o' } );"><span
                          class="count">
                          3
                      </span> <span class="grouping">people</span>
                        found this useful </a>
                      <a href="#"
                          data-id="26977500"
                          data-url="/teacherRating/updateTeacherRatingHelp/26977500"
                          data-tid="2093080" class="nothelpful" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROF:NotUseful', linkType:'o' } );"><span
                          class="count">
                          0
                      </span> <span class="grouping">people</span>
                        did not find this useful</a>
                    </div>
                  
                  <div class="helpful-links">
                    
                      <a href="/flagTeacherRating.jsp?rid=26977500" rel="nofollow" class="report" data-report-text="Honestly he really doesn&#39;t explain the material very well.  His whole philosophy is more or less here is how you use a hammer, now go design and build a house.">report this rating</a>
                    
                  </div>
                </td>
              

              </tr>
              <!-- Place ad after first three ratings -->
              
                

                <!-- START: Ad Placement Row -->
                <tr class="ad-placement-container">
                  <td colspan="4" class="ad-placement">
                    
<!-- index: 2, actualIndex: 1, properID 2-->
<div class="ad banner right-panelmatvnad">
	<div id='ad_lb_03' class="GAM">
		<script>
			var validTemplates = [3,4]
			var googleTemplate = window.RMP.Settings.ads.adTemplate.google;
			if(validTemplates.indexOf(googleTemplate) > -1) {
				googletag.cmd.push(() => {
					window.RMP.addSlot({
						id: 'ad_lb_03',
						sizes: [[970, 90], [728, 90], [320, 50], [300, 50], [300, 250]],
						targeting: {
							pos: ,
							refresh: 'true'
						},
						sizeMappingSettings: [
							{
								threshold: [0, 0],
								sizes: [[300, 50], [320, 50], [300, 250]]
							},
							{
								threshold: [768, 0],
								sizes: [[300, 250]]
							},
							{
								threshold: [1370, 0],
								sizes: [[728, 90], [970, 90], [300, 250]]
							}
						]
					});
				});
			}
		</script>
	</div>

	<script>window.RMP.Settings.ads.lastAdIndex = 2;</script>
</div>
                  </td>
                </tr>
              <!-- Then place ad after every fith rating thereafter -->
              <!-- END: Ad Placement Row -->
              

              

            
              
              <tr id="26740146" class = "even">
                <td class="rating">
                  <div class="date"> 06/20/2016</div>
                  <div class="rating-block average">
                    <div class="rating-wrapper">
                      <div class="icon average-icon"></div>
                      <span class="rating-type">average</span>
                    </div>
                    <div class="breakdown">
                      <div class="break">
                        <div class="descriptor-container">
                          <span class="score average">3.0</span>
                          <span class="descriptor">Overall Quality</span>
                        </div>
                      </div>
                      <div class="break">
                        <div class="descriptor-container">
                          <span class="score inverse average">3.0</span>
                          <span class="descriptor">Level of Difficulty</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="class">
                  <span class="name "> <span class="response">ASTRO30225</span></span>
                  <span class="credit">For Credit: <span class="response">Yes</span></span>
                  <span class="attendance">Attendance: <span class="response">Mandatory</span></span>

                  <span class="textbook-used">Textbook Used: <span class="response">Yes</span></span>
                  <span class="would-take-again">Would Take Again: <span class="response">No</span></span>
                  <span class="grade">Grade Received: <span class="response">N/A</span></span>

                  
                </td>
                
                  <td class="comments">
                  <div class="tagbox">
                    
                  </div>

                  <p class="commentsParagraph">
                      No study guides to provide for his students. Homework is straight forward and is done online. Take this class if you really need it to fit with your schedule.
                  </p>

                  
                    <div class="helpful-links thumbs">
                      <a href="#" data-id="26740146"
                          data-url="/teacherRating/updateTeacherRatingHelp/26740146"
                          data-tid="2093080" class="helpful" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROF:Useful', linkType:'o' } );"><span
                          class="count">
                          0
                      </span> <span class="grouping">people</span>
                        found this useful </a>
                      <a href="#"
                          data-id="26740146"
                          data-url="/teacherRating/updateTeacherRatingHelp/26740146"
                          data-tid="2093080" class="nothelpful" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROF:NotUseful', linkType:'o' } );"><span
                          class="count">
                          0
                      </span> <span class="grouping">people</span>
                        did not find this useful</a>
                    </div>
                  
                  <div class="helpful-links">
                    
                      <a href="/flagTeacherRating.jsp?rid=26740146" rel="nofollow" class="report" data-report-text="No study guides to provide for his students. Homework is straight forward and is done online. Take this class if you really need it to fit with your schedule.">report this rating</a>
                    
                  </div>
                </td>
              

              </tr>
              <!-- Place ad after first three ratings -->
              

              

            
          </table>

          
          <div class="filter-no-ratings">
            <p>No ratings found – <a href="#" class="filter-reset">view all ratings</a> for this professor.</p>
          </div>
  
          
  
          <div class="helpfulReviewBanner">
            
              <div class="text">Were these reviews helpful? Help out your fellow students.</div>
              <a href="/AddRating.jsp?tid=2093080" class="rate" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:&#39;PROF:Rate_bottom&#39;, linkType:&#39;o&#39; } )">Rate this professor</a>
            
          </div>
          <div class="more-from-prof-container">
            <a href="/search.jsp?queryoption=TEACHER&schoolName=Long Beach City College&schoolID=2378&dept=&queryBy=schoolDetails&query=*&stateselect=&country=&max=20">
              <span class="more-from-prof"><i class="icon--arow-sm"></i>More Professors from this school</span>
            </a>
          </div>
        </div>


        <div id="taboola-below-article-thumbnails"></div>
<script type="text/javascript">
  var taboolaTemplate = RMP.Settings.ads.adTemplate.taboola;
  if(taboolaTemplate === 2 || taboolaTemplate === 3) {
    var placement = "Below Article Thumbnails";
    if(RMP.Settings.page === 'search_results') {
      placement = "Below Search Results";
    }
    window._taboola = window._taboola || [];
    _taboola.push({
      mode: 'alternating-thumbnails-a',
      container: 'taboola-below-article-thumbnails',
      placement: placement,
      target_type: 'mix'
    });
  }
</script>
      </div>
      <!-- Starts The Note Table -->
      <div class="professor-notes togglable">
        <!-- This should only be added to the view if the current user matches the profile id -->

          <!-- need to add if condition here such that below should disaply only when prof logged in and tid = tpid -->
          <div class="addNote" style="display:none">
            <div class="header">Add your notes</div>
            <div class="form-wrap">
              <form action="save/2093080" id="noteForm" method='post' data-id="2093080">
                <input type="hidden" name="tid" value="2093080" id="tid" />
                <input type="hidden" name="mode" value="insert" id="mode" />
                <input type="hidden" name="rebuttalTotal" value="0" id="rebuttalTotal" />
                <div class="form-element">
                  <label>Class</label>
                  <div class="error"></div>
                  <div class="input form-elem">
                    <input type="text" name="course" placeholder="Course number" value="" class="required"/>
                    <span class="error-message">This field is required.</span>
                  </div>
                </div>
                <div class="form-element">
                  <label>Comment</label>
                  <div class="error"></div>
                  <div class="input form-elem">
                    <div id="noteCount" class="character-count"><span>350</span> characters left</div>
                    <textarea id="professorNote" name ="comments" maxlength="350" class="required"></textarea>
                    <span class="error-message">This field is required.</span>
                  </div>
                </div>
                <div class="legal">
                  By clicking the 'Submit' button, I acknowledge that I have read and agreed to the Rate My Professors
                  <a href="/TermsOfUse_us.jsp#guidelines" target="_blank">Site Guidelines</a>,
                  <a href="/TermsOfUse_us.jsp#use" target="_blank">Terms of Use</a> and
                  <a href="/TermsOfUse_us.jsp#privacy" target="_blank">Privacy Policy</a>.
                  Submitted data becomes the property of RateMyProfessors.com. IP addresses are logged.
                </div>
                <div class = "clearfix"></div>
                <input type="submit" id="noteAdd" name ="noteAdd" value="submit" data-reveal-id="saveNoteModal"/>
              </form>
            </div>
          </div>
        <!-- This should only be added to the view if the current user matches the profile id -->
        <table class="tftable" border="0">
          <tr>
            <th class="head-label" width="220px">date</th>
            <th class="head-label" width="255px">Class</th>
            <th class="head-label">Note</th>
          </tr>
          
        </table>
        
      </div>
      <!-- Ends: Note Table -->
    </div>
    <div class="left-panel off" data-teach-id="2093080" data-param-schoolid="2378" data-schoolid="2378" data-param-department="Physical Science" data-rebuttaltotal="0" data-userid="" data-proftpid="" data-tpid="">
      <div class = "side-panel">
        <div>
          Showing professors at
        </div>
        <div>
          <span class = "school-name">Long Beach City College</span> <a id="edit" href="javascript:void(0)" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROFMIDPANE:Edit', linkType:'o' } );">Edit</a>
        </div>
        <div class = "department-combobox">
          in
          <select class="combobox" id = "department-dropdown" onchange="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROFMIDPANE:ComboBox', linkType:'o' } );">
            <option value>Enter Your Department</option>
            
              
                <option value="Accounting">Accounting</option>
              
            
              
                <option value="Agriculture">Agriculture</option>
              
            
              
                <option value="Allied Health">Allied Health</option>
              
            
              
                <option value="Anatomy">Anatomy</option>
              
            
              
                <option value="Anthropology">Anthropology</option>
              
            
              
                <option value="Architecture">Architecture</option>
              
            
              
                <option value="Art">Art</option>
              
            
              
                <option value="Art History">Art History</option>
              
            
              
                <option value="Athletics">Athletics</option>
              
            
              
                <option value="Aviation">Aviation</option>
              
            
              
                <option value="Biology">Biology</option>
              
            
              
                <option value="Business">Business</option>
              
            
              
                <option value="Business Law">Business Law</option>
              
            
              
                <option value="Career Development">Career Development</option>
              
            
              
                <option value="Carpentry Technology">Carpentry Technology</option>
              
            
              
                <option value="Chemistry">Chemistry</option>
              
            
              
                <option value="Chicano Studies">Chicano Studies</option>
              
            
              
                <option value="Child & Family Studies">Child & Family Studies</option>
              
            
              
                <option value="Child & Youth">Child & Youth</option>
              
            
              
                <option value="Child Development">Child Development</option>
              
            
              
                <option value="Classics">Classics</option>
              
            
              
                <option value="Communication">Communication</option>
              
            
              
                <option value="Computer Science">Computer Science</option>
              
            
              
                <option value="Counseling">Counseling</option>
              
            
              
                <option value="Criminal Justice">Criminal Justice</option>
              
            
              
                <option value="Culinary Arts">Culinary Arts</option>
              
            
              
                <option value="Dance">Dance</option>
              
            
              
                <option value="Design">Design</option>
              
            
              
                <option value="Drafting">Drafting</option>
              
            
              
                <option value="Economics">Economics</option>
              
            
              
                <option value="Education">Education</option>
              
            
              
                <option value="Engineering">Engineering</option>
              
            
              
                <option value="English">English</option>
              
            
              
                <option value="English As A Second Language">English As A Second Language</option>
              
            
              
                <option value="Ethnic Studies">Ethnic Studies</option>
              
            
              
                <option value="Film">Film</option>
              
            
              
                <option value="Finance">Finance</option>
              
            
              
                <option value="Fine Arts">Fine Arts</option>
              
            
              
                <option value="Floral Design">Floral Design</option>
              
            
              
                <option value="Food & Nutrition">Food & Nutrition</option>
              
            
              
                <option value="French">French</option>
              
            
              
                <option value="General Studies">General Studies</option>
              
            
              
                <option value="Geography">Geography</option>
              
            
              
                <option value="Geology">Geology</option>
              
            
              
                <option value="German">German</option>
              
            
              
                <option value="Graphic Arts">Graphic Arts</option>
              
            
              
                <option value="Health Science">Health Science</option>
              
            
              
                <option value="History">History</option>
              
            
              
                <option value="Horticulture">Horticulture</option>
              
            
              
                <option value="Hospitality">Hospitality</option>
              
            
              
                <option value="Human Services">Human Services</option>
              
            
              
                <option value="Humanities">Humanities</option>
              
            
              
                <option value="Information Science">Information Science</option>
              
            
              
                <option value="Instructional Technology">Instructional Technology</option>
              
            
              
                <option value="Interior Design">Interior Design</option>
              
            
              
                <option value="International Studies">International Studies</option>
              
            
              
                <option value="Journalism">Journalism</option>
              
            
              
                <option value="Languages">Languages</option>
              
            
              
                <option value="Law">Law</option>
              
            
              
                <option value="Learning Skills">Learning Skills</option>
              
            
              
                <option value="Library Science">Library Science</option>
              
            
              
                <option value="Life Science">Life Science</option>
              
            
              
                <option value="Literature">Literature</option>
              
            
              
                <option value="Management">Management</option>
              
            
              
                <option value="Marketing">Marketing</option>
              
            
              
                <option value="Mathematics">Mathematics</option>
              
            
              
                <option value="Medical Assisting">Medical Assisting</option>
              
            
              
                <option value="Medicine">Medicine</option>
              
            
              
                <option value="Music">Music</option>
              
            
              
                <option value="Nursing">Nursing</option>
              
            
              
                <option value="Nutrition & Foods">Nutrition & Foods</option>
              
            
              
                <option value="Philosophy">Philosophy</option>
              
            
              
                <option value="Photography">Photography</option>
              
            
              
                <option value="Physical Education">Physical Education</option>
              
            
              
                <option value="Physical Science" selected="selected">Physical Science</option>
              
            
              
                <option value="Physics">Physics</option>
              
            
              
                <option value="Political Science">Political Science</option>
              
            
              
                <option value="Psychology">Psychology</option>
              
            
              
                <option value="Reading">Reading</option>
              
            
              
                <option value="Religion">Religion</option>
              
            
              
                <option value="Science">Science</option>
              
            
              
                <option value="Social Science">Social Science</option>
              
            
              
                <option value="Social Work">Social Work</option>
              
            
              
                <option value="Sociology">Sociology</option>
              
            
              
                <option value="Speech Communication">Speech Communication</option>
              
            
              
                <option value="Theater">Theater</option>
              
            
              
                <option value="Trades & Technology">Trades & Technology</option>
              
            
              
                <option value="Vocational Nursing">Vocational Nursing</option>
              
            
              
                <option value="Welding">Welding</option>
              
            
              
                <option value="Women's Studies">Women's Studies</option>
              
            
              
                <option value="Writing">Writing</option>
              
            
          </select>
        </div>
        <!--googleoff: index-->
<div class="panel-filter">
  <div class="sort-options">
    <span class="professor-count">0</span> professors found
    <select id="sort-results" onchange="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROFMIDPANE:Sort', linkType:'o' } );">
      <!--
        use cookies to determine which sort is selected
        we also unfortunately have to replace html encoded spaces
        since cookies are url encoded
      -->
      <option value="total_number_of_ratings_i desc"  >Most Rated</option>
      <option value="averageratingscore_rf desc,total_number_of_ratings_i desc" >Highest Rated</option>
      <option value="averageeasyscore_rf asc" >Least Difficult</option>
      <option value="teacherlastname_sort_s asc,teacherfirstname_sort_s asc,averageratingscore_rf desc,total_number_of_ratings_i desc" >Alphabetical</option>
    </select>
  </div>
  <div class = "professor-name-filter">
    <input id = "professor-name" type = "text" placeholder = "Enter Your Professor's Name" value = "" onfocus="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROFMIDPANE:SearchbynameSort', linkType:'o' } );">
  </div>
  <div class="filter-options">
    
      <a class="result " data-value="a" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROFMIDPANE:AlphaFilter', linkType:'o' } );">a</a>
    
      <a class="result " data-value="b" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROFMIDPANE:AlphaFilter', linkType:'o' } );">b</a>
    
      <a class="result " data-value="c" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROFMIDPANE:AlphaFilter', linkType:'o' } );">c</a>
    
      <a class="result " data-value="d" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROFMIDPANE:AlphaFilter', linkType:'o' } );">d</a>
    
      <a class="result " data-value="e" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROFMIDPANE:AlphaFilter', linkType:'o' } );">e</a>
    
      <a class="result " data-value="f" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROFMIDPANE:AlphaFilter', linkType:'o' } );">f</a>
    
      <a class="result " data-value="g" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROFMIDPANE:AlphaFilter', linkType:'o' } );">g</a>
    
      <a class="result " data-value="h" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROFMIDPANE:AlphaFilter', linkType:'o' } );">h</a>
    
      <a class="result " data-value="i" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROFMIDPANE:AlphaFilter', linkType:'o' } );">i</a>
    
      <a class="result " data-value="j" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROFMIDPANE:AlphaFilter', linkType:'o' } );">j</a>
    
      <a class="result " data-value="k" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROFMIDPANE:AlphaFilter', linkType:'o' } );">k</a>
    
      <a class="result " data-value="l" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROFMIDPANE:AlphaFilter', linkType:'o' } );">l</a>
    
      <a class="result " data-value="m" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROFMIDPANE:AlphaFilter', linkType:'o' } );">m</a>
    
      <a class="result " data-value="n" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROFMIDPANE:AlphaFilter', linkType:'o' } );">n</a>
    
      <a class="result " data-value="o" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROFMIDPANE:AlphaFilter', linkType:'o' } );">o</a>
    
      <a class="result " data-value="p" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROFMIDPANE:AlphaFilter', linkType:'o' } );">p</a>
    
      <a class="result " data-value="q" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROFMIDPANE:AlphaFilter', linkType:'o' } );">q</a>
    
      <a class="result " data-value="r" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROFMIDPANE:AlphaFilter', linkType:'o' } );">r</a>
    
      <a class="result " data-value="s" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROFMIDPANE:AlphaFilter', linkType:'o' } );">s</a>
    
      <a class="result " data-value="t" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROFMIDPANE:AlphaFilter', linkType:'o' } );">t</a>
    
      <a class="result " data-value="u" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROFMIDPANE:AlphaFilter', linkType:'o' } );">u</a>
    
      <a class="result " data-value="v" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROFMIDPANE:AlphaFilter', linkType:'o' } );">v</a>
    
      <a class="result " data-value="w" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROFMIDPANE:AlphaFilter', linkType:'o' } );">w</a>
    
      <a class="result " data-value="x" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROFMIDPANE:AlphaFilter', linkType:'o' } );">x</a>
    
      <a class="result " data-value="y" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROFMIDPANE:AlphaFilter', linkType:'o' } );">y</a>
    
      <a class="result " data-value="z" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROFMIDPANE:AlphaFilter', linkType:'o' } );">z</a>
    
    <a class="result" data-value="All">All</a>
  </div>
</div>
<div class="result-list">
  <ul></ul>
  <div class="progressbtnwrap" data-search-type="search">
    <div class="content" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROFMIDPANE:LoadMore', linkType:'o' } );">Load More</div>
    <div class="progress-bar"></div>
  </div>
</div>
<div class = "add-professor">
  don't see your professor? <a href = "/teacher/create" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROFMIDPANE:AddProf', linkType:'o' } );">add them.</a>
</div>
<!--googleon: index-->

      </div>
    </div>
    <!-- Modals -->
    <!-- Starts Tags Modal -->
    <div id="chooseTagModal" class="reveal-modal">
      <form action="/AddRating.jsp?tid=2093080" method="post" name="chooseTagForm" id="chooseTagForm" >
        <div class="modal-header">Tag your professor</div>
        <p>Select up to 3 tags that best describe your professor.</p>
        <div class="tag-holder">
          <div class="scrollable">
              
                <a href="#" class="inactive">Gives good feedback</a>
              
                <a href="#" class="inactive">Respected</a>
              
                <a href="#" class="inactive">Lots of homework</a>
              
                <a href="#" class="inactive">Accessible outside class</a>
              
                <a href="#" class="inactive">Get ready to read</a>
              
                <a href="#" class="inactive">Participation matters</a>
              
                <a href="#" class="inactive">Skip class? You won't pass.</a>
              
                <a href="#" class="inactive">Inspirational</a>
              
                <a href="#" class="inactive">Graded by few things</a>
              
                <a href="#" class="inactive">Test heavy</a>
              
                <a href="#" class="inactive">Group projects</a>
              
                <a href="#" class="inactive">Clear grading criteria</a>
              
                <a href="#" class="inactive">Hilarious</a>
              
                <a href="#" class="inactive">Beware of pop quizzes</a>
              
                <a href="#" class="inactive">Amazing lectures</a>
              
                <a href="#" class="inactive">Lecture heavy</a>
              
                <a href="#" class="inactive">Caring</a>
              
                <a href="#" class="inactive">EXTRA CREDIT</a>
              
                <a href="#" class="inactive">So many papers</a>
              
                <a href="#" class="inactive">Tough grader</a>
              
            </div>
        </div>
        <input type="hidden" id="tags" name="chosen_tags" />
        <input type="submit" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:&#39;PROF:Tags_Continue&#39;, linkType:&#39;o&#39; } );this.style.display=&#39;none&#39;;" value="Continue" name="tagSubmit" id="tagSubmit" />
      </form>
      <a class="close-reveal-modal" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROF:Tags_Cancel', linkType:'o' } );">&#215;</a>
    </div>
    <!-- Ends Tags Modal -->
    <!-- DELETE NOTE MODAL REPLACE HERE -->
    <!-- Save Note Modal -->
    <!-- SAVE NOTE MODAL REPLACE HERE -->
    <!-- Save Note Modal -->
    <!-- Modals -->
  
        </div>
      </div>
      <!-- Ends Body Content -->

      <!-- Starts Mobile Footer -->
      
        

<footer class="mobileFooter hidden-lg toggleable">
	<button class="toggle">
		<span class="show"><i class="fa fa-chevron-up">&nbsp;</i>Show Footer</span>
		<span class="hide"><i class="fa fa-chevron-down">&nbsp;</i>Hide Footer</span>
	</button>
	<ul>
		<li>
			<a href="/%20utility/about">about</a>
		</li>
		<li>
			<a href="/%20utility/help">Help</a>
		</li>
		<li>
			<a href="/%20utility/contact">Contact Us</a>
		</li>
		<li>
			<a href="/%20utility/terms#guidelines" id="guidelinesPage">
				Site Guidelines
			</a>
		</li>
		<li>
			<a href="/%20utility/terms#privacy">Ad Choices</a>
		</li>
		<li>
			<a href="/%20utility/terms#use" id="termUsePage">
				Terms &amp; Conditions
			</a>
		</li>
		<li>
			<a href="/%20utility/terms#privacy" id="privacyPage">
				Privacy Policy
			</a>
		</li>
		<li>
			<a href="/%20utility/terms#copyright" id="copyRightPage">
				Copyright Compliance Policy
			</a>
		</li>
		<li class="terms-conditions">
			&copy; 2019 Cheddar, Inc. - All Rights Reserved.
		</li>
	</ul>
</footer>


      
      <!-- Ends Footer -->
    </div>
    <!-- Ends the page wrap -->

    <!-- Starts Desktop Footer -->
    
      





<div id="campusTourModal" class="reveal-modal" style="width: 50%;">
  <div class="videoElement">

  </div>
	<!-- <div style="position:relative; padding-bottom:56.25%; overflow:hidden;"><iframe src="//content.jwplatform.com/players/npqIgP0W-sBqL3JWU.html" width="100%" height="100%" frameborder="0" scrolling="auto" allowfullscreen style="position:absolute;"></iframe></div> -->
	<a class="close-reveal-modal">&#215;</a>
</div>
<div id="saveNoteModal" class="reveal-modal">
	<div class="modal-header">Note Submitted</div>
	<p>Thank you for submitting your note. It may take up to a minute to be displayed on the site.</p>
	<a href="javascript:void(0)" class="btn close-this save">Close</a>
	<a class="close-reveal-modal">&#215;</a>
</div>
<div id="adBlockModal" class="reveal-modal">
	<div class="modal-header">We see that you’re using AdBlock.</div>
	<p><br/><br/>Ads can be annoying, but they allow us to provide you this resource for free. If you use an ad blocker, we're not getting that revenue that helps keep RateMyProfessors.com up and running.</p>
	<p>Please whitelist us. Thanks!</p>
  <a class="close-reveal-modal">&#215;</a>
</div>
<div id="rateReminderModal" class="reveal-modal">
	<div class="modal-header reminderHeader">Choosing the right professor isn't easy!</div>
	<p class="reminderText">
		Help guide your fellow classmates by giving them the inside scoop! They'll do the same for you.
		Hope you had a good semester.<br/><br/>We're all counting on you.
	</p>
	<a class="btn close-this save shortCookie">Remind Me Later</a><br/><br/>
	<a href="/rateprof" class="btn close-this save longCookie">Rate Now</a>
	<a class="close-reveal-modal">&#215;</a>
</div>
<div id="deleteNoteModal" class="reveal-modal">
	<div class="delete-confirmed">
	<div class="modal-header">Note Deleted</div>
	<p>Your note has been deleted. It may take up to a minute to process.</p>
	<div class="delete-options">
		<a href="javascript:void(0)" class=" close-reveal-modal btn close-delete-confirm">Close</a>
	</div>
	</div>
	<div class="delete-not-confirmed">
	<div class="modal-header">Delete Note?</div>
	<div class="delete-text">Are you sure you want to delete this note? Once deleted, we can't bring it back.</div>
	<div class="delete-options">
		<a href="javascript:void(0)" class="delete-confirm" data-id="">Yes</a>
		<a href="javascript:void(0)" class="close-reveal-modal no">No</a>
	</div>
	</div>
	<a class="close-reveal-modal">&#215;</a>
</div>

<footer class="mainFooter hidden-md">
	<ul id="leftFooter">
		<li>
			<a href="/About.jsp">about</a>
			/
		</li>
		<li>
			<a href="/help.jsp">Help</a>
			/
		</li>
		<li>
			<a href="/utility/contact">Contact Us</a>
			/
		</li>
		<li>
			<a
				href="/TermsOfUse_us.jsp#guidelines"
				id="guidelinesPage"
			>
				Site Guidelines
			</a>
			/
		</li>
		<li>
			<a href="/%20utility/terms#privacy">Ad Choices</a>
			/
		</li>
		<li>
			<a
				href="/TermsOfUse_us.jsp#use"
				id="termUsePage"
			>
				Terms &amp; Conditions
			</a>
			/
		</li>
		<li>
			<a
				href="/TermsOfUse_us.jsp#privacy"
				id="privacyPage"
			>
				Privacy Policy
			</a>
			/
		</li>
		<li>
			<a
				href="/TermsOfUse_us.jsp#copyright"
				id="copyRightPage"
			>
				Copyright Compliance Policy
			</a>
		</li>

	</ul>
	<section class="copyright">
		&copy; 2019 Cheddar, Inc. - All Rights Reserved.
	</section>

	
	<div id="footerExtend"></div>
</footer> 


    
    <!-- Ends Footer -->

    <div class = "promotion promotionDesktop">
  <a class = "open" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROMOS:Maximize', linkType:'o' } );">&#9664;</a>
  <a class = "close" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROMOS:Minimize', linkType:'o' } );">×</a>
  <div class = "content">
    <a class = "img" onclick="promoClickEvent();"><img class = "promo-image" src = ""></a>
    <div class = "text-content">
      <h3 class = "title"><a class = "title" onclick="promoClickEvent();"><span class="title-content">Wild 'N Out Returns</span></a></h3>
      <span class = "description">Wednesday Jan 7 @ 11pm only on MTV2!</span>
    </div>
    <div class = "clearfix"></div>
    <span id="promoid" style="display:none">0</span>
    <a class = "more-info" onclick="promoClickEvent();">
    get more info about the premiere
    </a>
  </div>
</div>
    
    <div class="mobileAppPromo">
  <a href="#" class="close"></a>
  <a href="https://appsto.re/us/9UHLu.i" class="app-link"  target="_blank"></a>
  <img src="/assets/mobileAppPromo.png" />
</div>

    <!-- Starts the student Drop down -->
<!-- Ends the student drop down -->

<!-- Starts the Professor Drop down -->
<!-- Ends the Professor Drop down -->


<!-- Starts the login menu -->
<!-- Starts the login Menu -->
<script type="text/template" id="loginTemplate">

  <div id="loginMenu" class="lform">
    <div class="header">
      Login to Rate My Professors
    </div>
    <div class="why-signup">
      <span>Go ahead, log in, you're still anonymous.</span> You're always anonymous here, but logging in will save your school and recent searches, helping you find professors faster. You can thank us later.
    </div>
    <form id="loginForm" action="/userauth" method="post">
      <div class="form-element">
        <div class="error email password">Incorrect email or password</div>
        <div class="label">email</div>
        <input type="text" name="pemail" class="pemail"/>
      </div>

      <div class="form-element">
        <div class="label">password</div>
        <input type="text" name="ppassword" class="ppassword" />
      </div>

      <div class="form-element">
        <input type="checkbox" name="remember" value="0"/>
        <label class="rememberme">Remember Me</label>
        <a href="#" class="forgotpw" id="forgotPassword">Forgot my password </a>
      </div>

      <div class="form-element">
        <input type="submit" id="userLogin" value="Login"/>
        <div class="or-block">
          <hr/>
          <div class="ortext">or</div>
        </div>
        <a href="#" id="signupLink">Sign up for an account</a>

      </div>

    </form>

  </div>

</script>

<!-- Ends: login menu -->
<!-- Ends the login menu -->

<!-- Starts the Forgotten Password fields -->
<!-- Starts Forgot Password fields -->
<script type="text/template" id="resetPasswordForm">

  <div id="resetPassword" class="lform">
    <div class="header">Forgot Password</div>
    <p>Enter your login email to reset your password.</p>
    <form action="" method="post" id="resetPasswordField">
      <div class="form-element email-form">
        <div class="label">email</div>
        <input type="text" name="reset_password" id="reset_password">
      </div>
      <div class="form-element">
        <input type="submit" value="Reset password" id="reset_password_submit">
      </div>
    </form>
  </div>

</script>

<!-- Ends Forgot Password fields -->
<!-- Ends the Forgotten Password fields-->

<!-- Starts the create a user drop down -->

<!-- Ends the create user drop down -->


    <script>
      
      
      var mainJS = '/assets/micro-c972f90df58f7786ee7c3386bc710fd0.js';

      var resources = [
        mainJS,
        "/assets/libs/utils-04ad04e99b80015037821c85d81f4433.js",
      ];
      resources.forEach(function(source) {
        var script = document.createElement('script');
        script.src = source;
        script.async = false;
        document.body.appendChild(script);
      });
    </script>

    <script >
      window.___gcfg = {
        lang: 'en-US',
        parsetags: 'onload'
      };
    </script>
    <script src="https://apis.google.com/js/platform.js" async defer></script>
    <script src="https://apis.google.com/js/api:client.js"></script>
  <!-- PAGEOK -->

    


<script type="text/javascript">
	if(RMP.Settings.ads.adTemplate.taboola) {
		window._taboola = window._taboola || [];
		_taboola.push({flush: true});
	}
</script>
  </body>
</html>`


var rmp = new soup(html);

part = rmp.findAll('div', {class: 'grade'});

data = part[0].contents.nextElement;
console.log(data)
