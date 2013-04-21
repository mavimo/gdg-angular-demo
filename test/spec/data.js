'use strict';

// Simulated response from WS
var data = data || {};
data.tweets = data.tweets || {};
data.tweets.httpResp = data.tweets.httpResp || {
  "query": {
    "count": 1,
    "lang": "en-US",
    "results": {
      "json": {
        "next_page": "?page=2&max_id=325990668457623552&q=angularjs",
        "completed_in": "0.013",
        "max_id_str": "325990668457623552",
        "since_id_str": "0",
        "refresh_url": "?since_id=325990668457623552&q=angularjs",
        "results": [
          {
            "iso_language_code": "in",
            "profile_image_url_https": "https://si0.twimg.com/profile_images/2570713772/835e6f0f-b806-4903-ba37-d9d8b46b53e7_normal.png",
            "from_user_id_str": "25451553",
            "text": "RT @hnycombinator: Diving into AngularJS http://t.co/12xpoJUBLX",
            "from_user_name": "Diego Pacheco",
            "profile_image_url": "http://a0.twimg.com/profile_images/2570713772/835e6f0f-b806-4903-ba37-d9d8b46b53e7_normal.png",
            "id": "325990668457623552",
            "source": "&lt;a href=&quot;http://www.tweetdeck.com&quot;&gt;TweetDeck&lt;/a&gt;",
            "id_str": "325990668457623552",
            "from_user": "diego_pacheco",
            "from_user_id": "25451553",
            "geo": "null",
            "created_at": "Sun, 21 Apr 2013 15:13:26 +0000",
            "metadata": {
              "result_type": "recent"
            }
          },
          {
            "iso_language_code": "in",
            "profile_image_url_https": "https://si0.twimg.com/profile_images/1337709347/2f8f1ce_normal.jpg",
            "from_user_id_str": "170959775",
            "text": "RT @newsycombinator: Diving into AngularJS http://t.co/wlcZ5dyFgA",
            "from_user_name": "Colin Johnsun",
            "profile_image_url": "http://a0.twimg.com/profile_images/1337709347/2f8f1ce_normal.jpg",
            "id": "325990437154324480",
            "source": "&lt;a href=&quot;http://tapbots.com/tweetbot&quot;&gt;Tweetbot for iOS&lt;/a&gt;",
            "id_str": "325990437154324480",
            "from_user": "chillijay",
            "from_user_id": "170959775",
            "geo": "null",
            "created_at": "Sun, 21 Apr 2013 15:12:31 +0000",
            "metadata": {
              "result_type": "recent"
            }
          },
          {
            "iso_language_code": "in",
            "profile_image_url_https": "https://si0.twimg.com/profile_images/1850946305/1_normal.jpg",
            "from_user_id_str": "466668628",
            "text": "RT @hnycombinator: Diving into AngularJS http://t.co/12xpoJUBLX",
            "from_user_name": "Pavlos Giannakis",
            "profile_image_url": "http://a0.twimg.com/profile_images/1850946305/1_normal.jpg",
            "id": "325990366375456768",
            "source": "&lt;a href=&quot;http://twitter.com/&quot;&gt;web&lt;/a&gt;",
            "id_str": "325990366375456768",
            "from_user": "PvlsGnnks",
            "from_user_id": "466668628",
            "geo": "null",
            "created_at": "Sun, 21 Apr 2013 15:12:14 +0000",
            "metadata": {
              "result_type": "recent"
            }
          },
          {
            "iso_language_code": "in",
            "profile_image_url_https": "https://si0.twimg.com/profile_images/55176345/hackernewsfeed_normal.png",
            "from_user_id_str": "15042473",
            "text": "Diving into AngularJS http://t.co/12xpoJUBLX",
            "from_user_name": "HN from Y Combinator",
            "profile_image_url": "http://a0.twimg.com/profile_images/55176345/hackernewsfeed_normal.png",
            "id": "325989246945087488",
            "source": "&lt;a href=&quot;http://www.google.com/&quot;&gt;Google&lt;/a&gt;",
            "id_str": "325989246945087488",
            "from_user": "hnycombinator",
            "from_user_id": "15042473",
            "geo": "null",
            "created_at": "Sun, 21 Apr 2013 15:07:47 +0000",
            "metadata": {
              "result_type": "recent"
            }
          },
          {
            "iso_language_code": "in",
            "profile_image_url_https": "https://si0.twimg.com/profile_images/1765666853/image1326949938_normal.png",
            "from_user_id_str": "17575623",
            "text": "RT @newsycombinator: Diving into AngularJS http://t.co/wlcZ5dyFgA",
            "from_user_name": "Demis Bellot",
            "profile_image_url": "http://a0.twimg.com/profile_images/1765666853/image1326949938_normal.png",
            "id": "325989043164823554",
            "source": "&lt;a href=&quot;http://twitter.com/&quot;&gt;web&lt;/a&gt;",
            "id_str": "325989043164823554",
            "from_user": "demisbellot",
            "from_user_id": "17575623",
            "geo": "null",
            "created_at": "Sun, 21 Apr 2013 15:06:59 +0000",
            "metadata": {
              "result_type": "recent"
            }
          },
          {
            "iso_language_code": "in",
            "profile_image_url_https": "https://si0.twimg.com/profile_images/393072021/photo_normal.jpg",
            "from_user_id_str": "70713513",
            "text": "RT @newsycombinator: Diving into AngularJS http://t.co/wlcZ5dyFgA",
            "from_user_name": "Marc Alexandre",
            "profile_image_url": "http://a0.twimg.com/profile_images/393072021/photo_normal.jpg",
            "id": "325988889561014274",
            "source": "&lt;a href=&quot;http://twitter.com/&quot;&gt;web&lt;/a&gt;",
            "id_str": "325988889561014274",
            "from_user": "thagou",
            "from_user_id": "70713513",
            "geo": "null",
            "created_at": "Sun, 21 Apr 2013 15:06:22 +0000",
            "metadata": {
              "result_type": "recent"
            }
          },
          {
            "iso_language_code": "in",
            "profile_image_url_https": "https://si0.twimg.com/profile_images/512625755/icon_normal.gif",
            "from_user_id_str": "63468443",
            "text": "HNews: Diving into AngularJS http://t.co/GhHnzqz9g0",
            "from_user_name": "Tech news (BOT)",
            "profile_image_url": "http://a0.twimg.com/profile_images/512625755/icon_normal.gif",
            "id": "325988584278609920",
            "source": "&lt;a href=&quot;http://xa.bi/tek_news&quot;&gt;tek_news_bot&lt;/a&gt;",
            "id_str": "325988584278609920",
            "from_user": "tek_news",
            "from_user_id": "63468443",
            "geo": "null",
            "created_at": "Sun, 21 Apr 2013 15:05:09 +0000",
            "metadata": {
              "result_type": "recent"
            }
          },
          {
            "iso_language_code": "in",
            "profile_image_url_https": "https://si0.twimg.com/profile_images/52589204/y_normal.png",
            "from_user_id_str": "14335498",
            "text": "Diving into AngularJS http://t.co/wlcZ5dyFgA",
            "from_user_name": "news.yc Popular",
            "profile_image_url": "http://a0.twimg.com/profile_images/52589204/y_normal.png",
            "id": "325988556914978819",
            "source": "&lt;a href=&quot;http://www.steer.me&quot;&gt;newsycombinator&lt;/a&gt;",
            "id_str": "325988556914978819",
            "from_user": "newsycombinator",
            "from_user_id": "14335498",
            "geo": "null",
            "created_at": "Sun, 21 Apr 2013 15:05:03 +0000",
            "metadata": {
              "result_type": "recent"
            }
          },
          {
            "iso_language_code": "in",
            "profile_image_url_https": "https://si0.twimg.com/profile_images/78444845/idea_normal.png",
            "from_user_id_str": "19311402",
            "text": "Diving into AngularJS http://t.co/hSJqS2BrKL #news",
            "from_user_name": "Web Startup Group",
            "profile_image_url": "http://a0.twimg.com/profile_images/78444845/idea_normal.png",
            "id": "325988302555590656",
            "source": "&lt;a href=&quot;http://ifttt.com&quot;&gt;IFTTT&lt;/a&gt;",
            "id_str": "325988302555590656",
            "from_user": "WebStartupGroup",
            "from_user_id": "19311402",
            "geo": "null",
            "created_at": "Sun, 21 Apr 2013 15:04:02 +0000",
            "metadata": {
              "result_type": "recent"
            }
          },
          {
            "iso_language_code": "in",
            "profile_image_url_https": "https://si0.twimg.com/sticky/default_profile_images/default_profile_5_normal.png",
            "from_user_id_str": "799240657",
            "text": "From HN: Diving into AngularJS http://t.co/yvMBtcYlwd",
            "from_user_name": "Hacker, The Artist",
            "profile_image_url": "http://a0.twimg.com/sticky/default_profile_images/default_profile_5_normal.png",
            "id": "325988182057439232",
            "source": "&lt;a href=&quot;http://ifttt.com&quot;&gt;IFTTT&lt;/a&gt;",
            "id_str": "325988182057439232",
            "from_user": "HackerTheArtist",
            "from_user_id": "799240657",
            "geo": "null",
            "created_at": "Sun, 21 Apr 2013 15:03:33 +0000",
            "metadata": {
              "result_type": "recent"
            }
          },
          {
            "iso_language_code": "fr",
            "profile_image_url_https": "https://si0.twimg.com/profile_images/1262114313/IMG_1841_normal.JPG",
            "from_user_id_str": "195555022",
            "text": "aujourd'hui: je bricole une appli nodeJs &amp; angularJs gr\u00e2ce \u00e0 @laut3rry",
            "from_user_name": "micka\u00ebl andrieu",
            "profile_image_url": "http://a0.twimg.com/profile_images/1262114313/IMG_1841_normal.JPG",
            "id": "325988174721593345",
            "source": "&lt;a href=&quot;http://twitter.com/&quot;&gt;web&lt;/a&gt;",
            "id_str": "325988174721593345",
            "from_user": "mickael_andrieu",
            "from_user_id": "195555022",
            "geo": "null",
            "created_at": "Sun, 21 Apr 2013 15:03:32 +0000",
            "metadata": {
              "result_type": "recent"
            }
          },
          {
            "iso_language_code": "in",
            "profile_image_url_https": "https://si0.twimg.com/profile_images/1405908372/1_normal.png",
            "from_user_id_str": "317653311",
            "text": "Diving into AngularJS \n(Discuss on HN - http://t.co/gAmtK5mb6V) http://t.co/SHqkYBiAlf",
            "from_user_name": "Hacker News",
            "profile_image_url": "http://a0.twimg.com/profile_images/1405908372/1_normal.png",
            "id": "325987416148160513",
            "source": "&lt;a href=&quot;http://www.facebook.com/twitter&quot;&gt;Facebook&lt;/a&gt;",
            "id_str": "325987416148160513",
            "from_user": "hnbot",
            "from_user_id": "317653311",
            "geo": "null",
            "created_at": "Sun, 21 Apr 2013 15:00:31 +0000",
            "metadata": {
              "result_type": "recent"
            }
          },
          {
            "iso_language_code": "in",
            "profile_image_url_https": "https://si0.twimg.com/profile_images/2344974434/dzewupxsyr6vsuh5o3n0_normal.png",
            "from_user_id_str": "569230107",
            "text": "Diving into AngularJS http://t.co/ZX0jwELhfm",
            "from_user_name": "DotNet Hackers",
            "profile_image_url": "http://a0.twimg.com/profile_images/2344974434/dzewupxsyr6vsuh5o3n0_normal.png",
            "id": "325986848713367552",
            "source": "&lt;a href=&quot;http://dlvr.it&quot;&gt;dlvr.it&lt;/a&gt;",
            "id_str": "325986848713367552",
            "from_user": "rhirauac",
            "from_user_id": "569230107",
            "geo": "null",
            "created_at": "Sun, 21 Apr 2013 14:58:15 +0000",
            "metadata": {
              "result_type": "recent"
            }
          },
          {
            "iso_language_code": "in",
            "profile_image_url_https": "https://si0.twimg.com/profile_images/2302038733/1752_normal.jpg",
            "from_user_id_str": "585540702",
            "text": "Diving into AngularJS http://t.co/c8CLHiywkq",
            "from_user_name": "Nathaniel Parmentier",
            "profile_image_url": "http://a0.twimg.com/profile_images/2302038733/1752_normal.jpg",
            "id": "325986844506476544",
            "source": "&lt;a href=&quot;http://dlvr.it&quot;&gt;dlvr.it&lt;/a&gt;",
            "id_str": "325986844506476544",
            "from_user": "nateparm",
            "from_user_id": "585540702",
            "geo": "null",
            "created_at": "Sun, 21 Apr 2013 14:58:14 +0000",
            "metadata": {
              "result_type": "recent"
            }
          },
          {
            "iso_language_code": "in",
            "profile_image_url_https": "https://si0.twimg.com/profile_images/2219665404/me_normal.png",
            "from_user_id_str": "580481911",
            "text": "Diving into AngularJS http://t.co/mfqe9XIiAF #attribo",
            "from_user_name": "Vinod Shintre",
            "profile_image_url": "http://a0.twimg.com/profile_images/2219665404/me_normal.png",
            "id": "325985657631686656",
            "source": "&lt;a href=&quot;http://ifttt.com&quot;&gt;IFTTT&lt;/a&gt;",
            "id_str": "325985657631686656",
            "from_user": "VinodShintre",
            "from_user_id": "580481911",
            "geo": "null",
            "created_at": "Sun, 21 Apr 2013 14:53:31 +0000",
            "metadata": {
              "result_type": "recent"
            }
          }
        ],
        "since_id": "0",
        "results_per_page": "15",
        "query": "angularjs",
        "max_id": "325990668457623552",
        "page": "1"
      }
    },
    "created": "2013-04-21T15:15:31Z"
  }
}
