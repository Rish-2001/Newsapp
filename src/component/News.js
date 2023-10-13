import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  articles= [
    {
    "source": {
    "id": "engadget",
    "name": "Engadget"
    },
    "author": "Devindra Hardawar",
    "title": "Meta Quest 3 review: A bit of mixed reality makes for better VR",
    "description": "The Meta Quest 3 proves that the Meta Quest 2 was just an impossibly good deal. When that VR headset arrived for just $300 three years ago, it was the perfect gateway to VR for most people. You didn't need to hook it up to anything, you just flipped it on and…",
    "url": "https://www.engadget.com/meta-quest-3-review-mixed-reality-vr-150009788.html",
    "urlToImage": "https://s.yimg.com/uu/api/res/1.2/upm2rniwjAhlDCHyYE8tsQ--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-10/5f8a72b0-665b-11ee-bf5f-4b93668c120f.cf.jpg",
    "publishedAt": "2023-10-09T15:00:09Z",
    "content": "The Meta Quest 3 proves that the Meta Ques 2 was just an impossibly good deal. When that VR headset arrived for just $300 three years ago, it was the perfect gateway to VR for most people. You didn't… [+8230 chars]"
    },
    {
    "source": {
    "id": "wired",
    "name": "Wired"
    },
    "author": "Medea Giordano, Louryn Strampe",
    "title": "27 Best Early October Prime Day Deals (2023) on Headphones, Vacuums, and More",
    "description": "Amazon’s Prime Big Deal Days shopping holiday kicks off tomorrow and runs through October 11, but early deals are already here.",
    "url": "https://www.wired.com/story/best-october-prime-day-deals-2023-4/",
    "urlToImage": "https://media.wired.com/photos/64e3b8540124a91cee27dc66/191:100/w_1280,c_limit/JBL-Bar-1300X-Gear.jpg",
    "publishedAt": "2023-10-09T21:16:00Z",
    "content": "Amazon will launch a shopping event called Prime Big Deal Days on October 10 and 11, aka Prime Day Part II. As usual, many of these Prime Day deals will require a Prime membership, though you can tak… [+16691 chars]"
    },
    {
    "source": {
    "id": "the-verge",
    "name": "The Verge"
    },
    "author": "David Pierce",
    "title": "Meta Quest 3 review: almost the one we’ve been waiting for",
    "description": "Meta’s new VR headset is faster, higher-res, and capable of playing better games than ever. But Meta is also trying to make mixed reality happen like the Apple Vision Pro — and it’s not quite there yet.",
    "url": "https://www.theverge.com/23906313/meta-quest-3-review-vr-mixed-reality-headset",
    "urlToImage": "https://cdn.vox-cdn.com/thumbor/YxuA4Gi_IBtmIuvpOEo1-JlMJNI=/0x0:4240x2832/1200x628/filters:focal(2423x920:2424x921)/cdn.vox-cdn.com/uploads/chorus_asset/file/24989047/Quest3hero.jpg",
    "publishedAt": "2023-10-09T15:00:00Z",
    "content": "Metas new headset is better than its predecessors in almost every way. But until theres more to do in mixed reality, this wont be the headset that gets everyone wearing headsets. \r\nByDavid Pierce, ed… [+19608 chars]"
    },
    {
    "source": {
    "id": "ars-technica",
    "name": "Ars Technica"
    },
    "author": "Chuong Nguyen",
    "title": "Dealmaster: Pre-Amazon Big Deal Days tech deals that don’t require a Prime membership",
    "description": "Amazon Prime Big Deal Days are coming, but you can already find savings at these retailers.",
    "url": "https://arstechnica.com/shopping/2023/10/amazon-prime-big-deal-days-best-non-amazon-deals/",
    "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2022/05/listing-1-760x380.jpg",
    "publishedAt": "2023-10-09T19:27:25Z",
    "content": "0 with \r\nEnlarge/ Lenovo's new ThinkPad laptops with AMD processors.\r\nAmazon's second big sale-a-thon of the year is coming this week, but you don't have to wait for the savings to drop during the re… [+7238 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Android Central"
    },
    "author": "michael.hicks@futurenet.com (Michael L Hicks)",
    "title": "Why wait for Prime Day? The Galaxy Watch 6 is its lowest-ever price!",
    "description": "10% off may not seem like a huge deal, but it's rare to save much on a watch that's less than two months old. And the Galaxy Watch 6 is already affordable compared to most flagship watches.",
    "url": "https://www.androidcentral.com/wearables/galaxy-watch-6-lowest-ever-price-prime-day",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/ufnEVTWJ54Vv7gCJrM3BLJ-1200-80.jpeg",
    "publishedAt": "2023-10-09T17:52:28Z",
    "content": "We have one more day to wait until the October Prime Day deals begin, but you don't actually have to wait: Amazon has jumped the gun with some excellent prices. Just look at the Galaxy Watch 6, our f… [+1251 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Android Central"
    },
    "author": "tips@androidcentral.com (Nickolas Diaz)",
    "title": "Epic Games vs. Google antitrust witness list includes Sundar Pichai",
    "description": "The witness list for Epic Games' antitrust case against Google's anticompetitive practices has been revealed.",
    "url": "https://www.androidcentral.com/gaming/epic-games-vs-google-antitrust-witness-list",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/JTZ9Wy8vTZP2gzZp6F69KN-1200-80.jpg",
    "publishedAt": "2023-10-09T20:22:44Z",
    "content": "<ul><li>A list totaling 53 witnesses who may or may not be called to the stand for Epic Games and Google's antitrust case.</li><li>Andy Rubin — known as the \"father of Android\" — is listed alongside … [+2369 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Android Central"
    },
    "author": "nicholas.sutrich@futurenet.com (Nicholas Sutrich)",
    "title": "Meta Quest 3 review: The best VR headset you can buy",
    "description": "The Meta Quest 3 represents the best of VR. It's a console that's easy to use and provides a huge next-generation upgrade over the Oculus Quest 2.",
    "url": "https://www.androidcentral.com/gaming/virtual-reality/meta-quest-3-review",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/8Z42ZNk7kBw483tteqmm9H-1200-80.jpg",
    "publishedAt": "2023-10-09T15:00:14Z",
    "content": "Three years ago, Meta changed VR forever when it launched the (then called) Oculus Quest 2, a cheaper, far more powerful headset than its predecessor. Now, the company is releasing the next-generatio… [+20310 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Juli Clover",
    "title": "'Green Bubbles and Blue Bubbles Want to Be Together' Says Samsung Ad Pushing Apple to Adopt RCS",
    "description": "Samsung today joined Google in attempting to convince Apple to adopt the Rich Communication Services or RCS messaging standard that Google has been pushing.\n\n\n\n\r\n\n\nIn a short ad that's a riff on Romeo and Juliet, Samsung features two smartphone interfaces tex…",
    "url": "https://www.macrumors.com/2023/10/09/samsung-pushes-apple-to-adopt-rcs/",
    "urlToImage": "https://images.macrumors.com/t/5EJqsB9cntVrDPW9Nk_eI9aqojQ=/1964x/article-new/2023/10/samsung-rcs-ad.jpg",
    "publishedAt": "2023-10-09T18:32:15Z",
    "content": "Samsung today joined Google in attempting to convince Apple to adopt the Rich Communication Services or RCS messaging standard that Google has been pushing.\r\nIn a short ad that's a riff on Romeo and … [+1360 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Mitchel Broussard",
    "title": "Amazon Prime Big Deal Days: Take $30 Off 2nd Gen Apple Watch SE Models, Starting at Just $219",
    "description": "Prime Day deals have hit the second generation Apple Watch SE today, starting at just $219.00 for select 40mm GPS models, down from $249.00. You can get three models at this price, including Midnight Aluminum, Silver Aluminum, and Starlight Aluminum.\n\n\n\nNote:…",
    "url": "https://www.macrumors.com/2023/10/09/amazon-prime-big-deal-days-apple-watch-se/",
    "urlToImage": "https://images.macrumors.com/t/EyxC4dIcoih5TvyPMmEFOC7TdFE=/1600x/article-new/2023/10/apple-watch-se-prime-big-deal.jpg",
    "publishedAt": "2023-10-09T15:29:53Z",
    "content": "Prime Day deals have hit the second generation Apple Watch SE today, starting at just $219.00 for select 40mm GPS models, down from $249.00. You can get three models at this price, including Midnight… [+771 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Juli Clover",
    "title": "Breakability Test Pits iPhone 15 Pro Max Against Galaxy Z Fold5, Pixel Fold and More",
    "description": "Device insurance provider Allstate Protection Plans today shared the results of one of its annual device drop tests, and this time around, the company broke some of the most expensive smartphones on the market, including the iPhone 15 Pro Max.\n\n\n\n\r\n\n\nThe drop…",
    "url": "https://www.macrumors.com/2023/10/09/iphone-15-breakability-test/",
    "urlToImage": "https://images.macrumors.com/t/D93bMIZZhgd76Kfp6sgbVmgGddE=/2128x/article-new/2023/10/iphone-15-allstate-test.jpg",
    "publishedAt": "2023-10-09T19:22:00Z",
    "content": "Device insurance provider Allstate Protection Plans today shared the results of one of its annual device drop tests, and this time around, the company broke some of the most expensive smartphones on … [+2521 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNET"
    },
    "author": "Albert Bassili",
    "title": "Early Prime Day Deal Offers 31% Off This Great TV for Watching Sports - CNET",
    "description": "This 55-inch Hisense U6 is going for just $398 and has a lot of advanced features that make it a steal.",
    "url": "https://www.cnet.com/deals/early-prime-day-deal-offers-31-off-this-great-tv-for-watching-sports/",
    "urlToImage": "https://www.cnet.com/a/img/resize/0f16173e83310c06b425c9960ee06f171b5762f6/hub/2023/10/08/b53e7763-ff1c-4274-bd4d-8ed5a8187f2f/hisense-u6-tv.png?auto=webp&fit=crop&height=675&width=1200",
    "publishedAt": "2023-10-09T12:09:00Z",
    "content": "While it isn't officially Prime Day yet, we're already seeing some excellent Prime Day deals roll out, especially on TVs. If you're looking for a great TV for watching sports, then we think this Hise… [+1422 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNET"
    },
    "author": "Adam Oram",
    "title": "Save Big on New and Refurbished M1 and M2 Macs From Just $280 - CNET",
    "description": "You can now pick up a portable Mac starting from just $280 if you're quick.",
    "url": "https://www.cnet.com/deals/save-big-on-new-and-refurbished-m1-and-m2-macs-from-just-280/",
    "urlToImage": "https://www.cnet.com/a/img/resize/871bc03153eca63d4d87f1bd8733d2c90ac76feb/hub/2023/05/10/4a67eb8d-7195-4831-813e-5875bcaf370a/macbook-air-m2-macbook-pro-14-inch.png?auto=webp&fit=crop&height=675&width=1200",
    "publishedAt": "2023-10-09T19:20:48Z",
    "content": "Picking up a MacBook doesn't have to cost thousands of dollars, especially if you're willing to go refurbished or choose an open-box product. Right now Woot has options for both, and prices start at … [+1212 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNET"
    },
    "author": "Katie Collins",
    "title": "AI as Your BFF? A New Wave of Chatbots Want to Get Personal With You - CNET",
    "description": "Amazon, Google, Meta and OpenAI are now all pushing AI interactions to be natural and conversational. Get ready for chatbots that want to be your friend.",
    "url": "https://www.cnet.com/tech/computing/ai-as-your-bff-a-new-wave-of-chatbots-want-to-get-personal-with-you/",
    "urlToImage": "https://www.cnet.com/a/img/resize/4e4752e294da544d6470d411f367f71628e2aa31/hub/2023/10/07/04bd6265-728a-4599-8f84-2e1cf3235573/gettyimages-1500238081.jpg?auto=webp&fit=crop&height=675&width=1200",
    "publishedAt": "2023-10-09T12:33:53Z",
    "content": "At its product event in September, Amazon executives couldn't say enough about how Alexa will be there for you as a friend, thanks to an injection of AI upgrades. \r\nDave Limp, the company's senior vi… [+11911 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNET"
    },
    "author": "Scott Stein",
    "title": "My Life With the Meta Quest 3: The Best VR Headset for the Moment - CNET",
    "description": "No need to upgrade yet, but this is clearly the best you can get for $500 (even if it's not perfect).",
    "url": "https://www.cnet.com/tech/computing/my-life-with-the-meta-quest-3-the-best-vr-headset-for-the-moment/",
    "urlToImage": "https://www.cnet.com/a/img/resize/75f86ab64d9a44d8678b7c8dbc964b9e995acaa5/hub/2023/09/27/1bf8ea29-b71c-4f2c-9453-6edb0d219608/quest14.jpg?auto=webp&fit=crop&height=675&width=1200",
    "publishedAt": "2023-10-09T15:00:00Z",
    "content": "As I walk around my living room, I'm shooting little aliens popping out from my sofa. Like, from behind it. And also through the walls. I fire shots that break through parts of my home and show an al… [+15583 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Juli Clover",
    "title": "Apple Vision Pro Supports Up to 100Hz Refresh Rate",
    "description": "The Vision Pro headset that Apple plans to release next year has displays that support up to a 100Hz refresh rate, according to code in the latest beta of visionOS.\n\n\n\n\n\nApple says that the Vision Pro headset runs at a 90Hz refresh rate most of the time, but …",
    "url": "https://www.macrumors.com/2023/10/09/vision-pro-100hz-refresh-rate/",
    "urlToImage": "https://images.macrumors.com/t/_3ZdexFpOCvS8zchAikSJtoScBg=/2698x/article-new/2023/06/vision-pro-headset-1.jpg",
    "publishedAt": "2023-10-09T20:47:00Z",
    "content": "The Vision Pro headset that Apple plans to release next year has displays that support up to a 100Hz refresh rate, according to code in the latest beta of visionOS.\r\nApple says that the Vision Pro he… [+1183 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Hartley Charlton",
    "title": "Apple CEO Tim Cook Talks the Future of iPhone, Driving an EV, and More in New Interview",
    "description": "Apple CEO Tim Cook has explained why the company releases a new iPhone every year, what the device will be like in the future, what he is personally doing to reduce his carbon footprint, and more in a new interview with Brut.\n\n\n\n\n\nThe brief interview, shot at…",
    "url": "https://www.macrumors.com/2023/10/09/cook-talks-iphone-future-and-more-in-new-interview/",
    "urlToImage": "https://images.macrumors.com/t/UwUNwdfxoYAGYhUmAdrr-Chx9dA=/1600x/article-new/2023/08/tim-cook-2022-iphone-14.jpg",
    "publishedAt": "2023-10-09T15:15:04Z",
    "content": "Apple CEO Tim Cook has explained why the company releases a new iPhone every year, what the device will be like in the future, what he is personally doing to reduce his carbon footprint, and more in … [+1579 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Hartley Charlton",
    "title": "Gurman: Vision Pro 2 Development Focusing on Size, Weight, and Prescription Lenses",
    "description": "Early work on Apple's second-generation Vision Pro headset focuses on reducing the device's size and weight, as well as an improved experience for users who need prescription lenses, according to Bloomberg's Mark Gurman.\n\n\n\n\n\nIn the latest edition of his \"Pow…",
    "url": "https://www.macrumors.com/2023/10/09/vision-pro-2-focusing-on-size-weight-lenses/",
    "urlToImage": "https://images.macrumors.com/t/WPnszPn7EMlcNVnpszlk3Nucuec=/2500x/article-new/2023/06/Apple-Vision-Pro-with-battery-Feature-Orange.jpg",
    "publishedAt": "2023-10-09T11:35:24Z",
    "content": "Early work on Apple's second-generation Vision Pro headset focuses on reducing the device's size and weight, as well as an improved experience for users who need prescription lenses, according to Blo… [+1352 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Slashdot.org"
    },
    "author": "msmash",
    "title": "Should New Tech Rules Apply To Microsoft's Bing, Apple's iMessage, EU Asks",
    "description": "EU antitrust regulators are asking Microsoft's users and rivals whether Bing should comply with new tough tech rules and also whether that should be the case for Apple's iMessage, Reuters reported Monday, citing people familiar with the matter. From the repor…",
    "url": "https://tech.slashdot.org/story/23/10/09/167243/should-new-tech-rules-apply-to-microsofts-bing-apples-imessage-eu-asks",
    "urlToImage": "https://a.fsdn.com/sd/topics/eu_64.png",
    "publishedAt": "2023-10-09T16:42:00Z",
    "content": "The European Commission in September opened investigations to assess whether Microsoft's Bing, Edge and Microsoft Advertising as well as Apple's iMessage should be subject to the Digital Markets Act … [+579 chars]"
    },
    {
    "source": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "Kylie Kirschner",
    "title": "Tesla owners are using the new button on the side of the iPhone 15 Pro to unlock their car, pop the frunk, and get the AC going",
    "description": "Tesla owners have wasted no time in programming Apple's new \"action button\" on the iPhone 15 Pro to make it easier than ever to control their car.",
    "url": "https://www.businessinsider.com/tesla-shortcuts-iphone-15-pro-action-button-2023-10",
    "urlToImage": "https://i.insider.com/6524258f6561dd877e74b782?width=1200&format=jpeg",
    "publishedAt": "2023-10-09T16:23:19Z",
    "content": "The new action button can be used as a Tesla key fob.Apple, Sjoerd van der Wal/Getty Images\r\n<ul>\n<li>The new iPhone 15 Pro has a customizable \"action button\" in place of the ring/silent switch.</li>… [+2269 chars]"
    },
    {
    "source": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "Tim Levin",
    "title": "I drove the Aston Martin DBX707 and saw what you get in an SUV that costs $276,000",
    "description": "The Aston Martin DBX707 has tons of horsepower and an interior fit for royalty, but it lacks tech like a touchscreen.",
    "url": "https://www.businessinsider.com/aston-martin-suv-dbx-707-review-horsepower-luxury-photos-2023-10",
    "urlToImage": "https://i.insider.com/652058ff9f7ca8b2bbdc5dfd?width=1200&format=jpeg",
    "publishedAt": "2023-10-09T09:00:01Z",
    "content": "The 2023 Aston Martin DBX707. Tim Levin/Insider\r\n<ul><li>I drove the 2023 Aston Martin DBX707, a 697-horsepower, $276,000 SUV. </li><li>Highs include a leather-covered interior, sleek styling, and br… [+6553 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "ReadWrite"
    },
    "author": "Radek Zielinski",
    "title": "Apple and Meta race to improve next-gen XR headsets",
    "description": "Although Apple and Meta have yet to release their first consumer virtual reality headsets, the tech giants are already working […]\nThe post Apple and Meta race to improve next-gen XR headsets appeared first on ReadWrite.",
    "url": "https://readwrite.com/apple-meta-xr-headsets/",
    "urlToImage": "https://readwrite.com/wp-content/uploads/2020/01/OculusQuest.jpg",
    "publishedAt": "2023-10-09T10:06:19Z",
    "content": "Although Apple and Meta have yet to release their first consumer virtual reality headsets, the tech giants are already working on the subsequent iterations.\r\nAccording to an Oct. 8 Bloomberg report, … [+1966 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "ReadWrite"
    },
    "author": "Radek Zielinski",
    "title": "Predator on the prowl: how Vietnam tried to hack U.S. diplomats and journalists",
    "description": "The Vietnamese government has been implicated in a spyware campaign this year that attempted to plant surveillance software on the […]\nThe post Predator on the prowl: how Vietnam tried to hack U.S. diplomats and journalists appeared first on ReadWrite.",
    "url": "https://readwrite.com/predator-on-the-prowl-how-vietnam-tried-to-hack-us-diplomats-and-journalists/",
    "urlToImage": "https://readwrite.com/wp-content/uploads/2023/10/Vietnam-spyware-hack-diplomats.jpg",
    "publishedAt": "2023-10-09T18:55:17Z",
    "content": "The Vietnamese government has been implicated in a spyware campaign this year that attempted to plant surveillance software on the phones of U.S. officials.\r\nAccording to an Oct. 9 The Washington Pos… [+2004 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hipertextual"
    },
    "author": "Rubén Chicharro",
    "title": "Apple ya está trabajando en la próxima generación del Vision Pro con dos mejoras clave",
    "description": "La futura generación del Apple Vision Pro podrían solventar dos de los principales problemas del modelo que la compañía anunció durante la pasada WWDC. Según Mark Gurman, de Bloomberg, la compañía está trabajando en un nuevo modelo que no solo será más ligero…",
    "url": "http://hipertextual.com/2023/10/proximos-apple-vision-pro-dos-mejoras-clave",
    "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2023/06/Apple-WWCD23-Vision-Pro-rotation-230605.jpg.large_2x.jpeg",
    "publishedAt": "2023-10-09T11:13:52Z",
    "content": "La futura generación del Apple Vision Pro podrían solventar dos de los principales problemas del modelo que la compañía anunció durante la pasada WWDC. Según Mark Gurman, de Bloomberg, la compañía es… [+2536 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hipertextual"
    },
    "author": "Gonzalo Franco",
    "title": "Ridley Scott explica por qué eligió a Joaquin Phoenix para ‘Napoleón’",
    "description": "Joaquin Phoenix está a punto de protagonizar Napoleón, la nueva película épica de Ridley Scott. Director e intérprete trabajaron juntos en uno de los papeles más recordados de Phoenix, el de Emperador Commodo en Gladiator. Sin embargo, lo que convenció a Scot…",
    "url": "http://hipertextual.com/2023/10/razon-ridley-scott-eligio-joaquin-phoenix-napoleon-joker",
    "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2023/10/Napoleon-Joker.jpg",
    "publishedAt": "2023-10-09T17:44:22Z",
    "content": "Joaquin Phoenix está a punto de protagonizar Napoleón, la nueva película épica de Ridley Scott. Director e intérprete trabajaron juntos en uno de los papeles más recordados de Phoenix, el de Emperado… [+2956 chars]"
    },
    {
    "source": {
    "id": "polygon",
    "name": "Polygon"
    },
    "author": "Zosha Millman",
    "title": "Netflix’s House of Usher, John Carpenter true crime, and more new TV this week",
    "description": "New TV on Crunchyroll, Netflix, Apple TV, and more, including John Carpenter’s TV show, The Fall of the House of Usher, Dr. Stone season 3 part 2, and beyond.",
    "url": "https://www.polygon.com/2023/10/9/23903001/new-tv-netflix-fall-house-usher-true-crime-frasier-anime-crunchyroll",
    "urlToImage": "https://cdn.vox-cdn.com/thumbor/5UxbhBr54gxx9_-59ZJSxt4JH5Y=/0x0:3600x1885/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24977074/TFHU_106_Unit_04905RC.jpg",
    "publishedAt": "2023-10-09T18:00:00Z",
    "content": "Its officially spooky month, so its no surprise weve got a couple spooky entries from the whos who of horror in this weeks roundup of new TV to watch. Were talking about Mike Flanagan, whos returning… [+4878 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Xataka.com"
    },
    "author": "Enrique Pérez",
    "title": "Qué sabemos (y qué no) sobre el joven fallecido en Bera tras explotar un dispositivo electrónico mientras dormía",
    "description": "Este domingo ha fallecido un joven de 25 años en Bera (Navarra). Ha sido a causa de las graves quemaduras provocadas por la explosión de un dispositivo electrónico que se encontraba enchufado mientras dormía, según han explicado fuentes de la investigación. \n…",
    "url": "https://www.xataka.com/seguridad/que-sabemos-que-no-joven-fallecido-bera-explotar-dispositivo-electronico-dormia",
    "urlToImage": "https://i.blogs.es/b680d6/guardia-civil/840_560.jpeg",
    "publishedAt": "2023-10-09T10:17:55Z",
    "content": "Este domingo ha fallecido un joven de 25 años en Bera (Navarra). Ha sido a causa de las graves quemaduras provocadas por la explosión de un dispositivo electrónico que se encontraba enchufado mientra… [+2861 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hubspot.com"
    },
    "author": "esantiago@hubspot.com (Erica Santiago)",
    "title": "X Creator Pay: Is X's Ad Revenue Pay Worth it for Content Creators?",
    "description": "Should content creators invest in X Premium and its Ad Revenue-Sharing program? I spoke to a couple of creators and gathered different perspectives.",
    "url": "https://blog.hubspot.com/marketing/x-creator-pay#article",
    "urlToImage": "https://blog.hubspot.com/hubfs/Untitled%20design%20%2840%29-1.jpg#keepProtocol",
    "publishedAt": "2023-10-09T11:00:00Z",
    "content": "Creators and users on the app formerly known as Twitter can now earn money thanks to a new program rollout.\r\nX's new ad revenue-sharing feature is the latest change to come to the platform after the … [+6870 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Digital Trends"
    },
    "author": "Mark Coppock",
    "title": "Is the MacBook Pro 14 still better than the Surface Laptop Studio 2?",
    "description": "The Microsoft Surface Laptop Studio 2 is a very good laptop with good performance and a ton of flexibility. But the Apple MacBook Pro 14 remains best of class.",
    "url": "https://www.digitaltrends.com/computing/microsoft-surface-studio-2-vs-apple-macbook-pro-14/",
    "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2023/10/surface-laptop-studio-2-review-10.jpg?resize=1200%2C630&p=1",
    "publishedAt": "2023-10-09T14:21:31Z",
    "content": "Digital Trends\r\nMicrosoft introduced the Surface Laptop Studio 2, an upgrade to the original pull-forward 2-in-1 laptop with more powerful components inside. It’s a very nice laptop with some standou… [+10787 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Digital Trends"
    },
    "author": "Lucas Coll",
    "title": "The best October Prime Day MacBook deals available now",
    "description": "Prime Day gets underway in mere hours and we've already spotted some awesome Prime Day MacBook deals. Here are the best picks.",
    "url": "https://www.digitaltrends.com/computing/best-october-prime-day-macbook-deals/",
    "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2023/06/Digital-Trends-Best-Prime-Day-MacBook-Deals.jpg?resize=1200%2C630&p=1",
    "publishedAt": "2023-10-09T12:09:35Z",
    "content": "Apple has a reputation for having expensive devices, so it’s always great when we find a good deal on an Apple device, whether it’s iPhone deals or iPad deals. Luckily, Amazon’s Prime Big Deal Days e… [+10009 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Digital Trends"
    },
    "author": "Alex Blake",
    "title": "Google has a great idea to fix your tab chaos in Chrome",
    "description": "The more you use a web browser, the worse your tab overload can become. Thankfully, Google has a great idea to fix the issue in Chrome with a handy automation.",
    "url": "https://www.digitaltrends.com/computing/google-chrome-organize-tabs/",
    "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2022/06/Google-Drive-MacBook-Table-Fruit.jpg?resize=1200%2C630&p=1",
    "publishedAt": "2023-10-09T09:42:56Z",
    "content": "If you use Google Chrome and are sick of managing an unruly mass of tabs in your web browser, help may soon be at hand. That’s because Google is testing a new feature that could bring order to your t… [+2417 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Digital Trends"
    },
    "author": "Alan Truly",
    "title": "Meta Quest 3 review: the VR headset you’ve been waiting for",
    "description": "Meta's Quest 3 costs $200 more than the Quest 2. How much have performance, graphics, mixed-reality, and comfort improved and is it worth the price?",
    "url": "https://www.digitaltrends.com/gaming/meta-quest-3-review/",
    "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2023/10/Alan-Truly-works-out-in-Les-Mills-Body-Combat.jpg?resize=1200%2C630&p=1",
    "publishedAt": "2023-10-09T15:01:01Z",
    "content": "The Meta Quest 3 just might change your mind about VR gaming. If you’ve been waiting and watching for VR headsets to reach a level of quality that’s worth your attention, that time has come.\r\nAt a ve… [+11584 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The New Yorker"
    },
    "author": "David Baker",
    "title": "“Childhood,” by David Baker",
    "description": "Poetry by David Baker: “The same cold blue all day in the sky.”",
    "url": "https://www.newyorker.com/magazine/2023/10/16/childhood-david-baker-poem",
    "urlToImage": "https://media.newyorker.com/photos/5d484cadad738a0008f2bf9a/16:9/w_1280,c_limit/hp-poetryspots4.jpg",
    "publishedAt": "2023-10-09T10:00:00Z",
    "content": "I miss the cold, but not the cold breaking,not the small limbs sheared, nor the icepick coldwhite wind working its whole way through youno matter your coat and gloves, and no matterthe blue scarf som… [+482 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "V8.dev"
    },
    "author": null,
    "title": "Control-Flow Integrity in V8",
    "description": "This blog post discusses the plans to implement control-flow integrity in V8.",
    "url": "https://v8.dev/blog/control-flow-integrity",
    "urlToImage": null,
    "publishedAt": "2023-10-09T14:55:43Z",
    "content": "Control-flow integrity (CFI) is a security feature aiming to prevent exploits from hijacking control-flow. The idea is that even if an attacker manages to corrupt the memory of a process, additional … [+9376 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "heise online"
    },
    "author": "Ben Schwan",
    "title": "41,5 Millionen US-Dollar: Apple-CEO verkauft Aktien nach Plan",
    "description": "Im Rahmen seiner eigenen Finanzplanung hat Tim Cook rund 500.000 Apple-Anteilsscheine zu Geld gemacht – obwohl deren Kurs gerade geschwächt ist.",
    "url": "https://www.heise.de/news/41-5-Millionen-US-Dollar-Apple-CEO-verkauft-Aktien-nach-Plan-9325252.html",
    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/3/1/3/5/4/4/timcook_wwdc22-89cd1b9a64b52432.png",
    "publishedAt": "2023-10-09T13:19:00Z",
    "content": "Apple-Chef Tim Cook hat Ende letzter Woche so viele Apple-Aktien verkauft wie seit zwei Jahren nicht. Das geht aus Unterlagen der amerikanischen Börsenaufsicht Securities and Exchange Commission (SEC… [+2053 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "heise online"
    },
    "author": "Ben Schwan",
    "title": "CarPlay: Porsche-Autos bekommen die volle Packung",
    "description": "Während andere Autofirmen wie GM sich von Apple abwenden, will Porsche mehr und mehr Kontrolle an CarPlay geben. Das hat gute Gründe.",
    "url": "https://www.heise.de/news/CarPlay-Porsche-Autos-bekommen-die-volle-Packung-9326382.html",
    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/3/1/4/1/6/9/porsche_carplay-dd926fa63838ff27.jpg",
    "publishedAt": "2023-10-09T09:02:00Z",
    "content": "Porsche hat die Integration seiner Fahrzeugsteuerung in Apples CarPlay weiter vorangetrieben. Nutzer der \"My Porsche\"-App können seit Sommer zahlreiche Funktionen ihres Autos direkt in Apples iPhone-… [+2020 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "heise online"
    },
    "author": "Holger Zelder",
    "title": "heise+ | HomeKit Secure Video in der Praxis: Sicher daheim",
    "description": "Mit einem kostenpflichtigen Abo speichern vernetzte Überwachungskameras Ihre Videos in Apples iCloud. Wie die Integration gelingt und was man damit machen kann.",
    "url": "https://www.heise.de/ratgeber/HomeKit-Secure-Video-in-der-Praxis-Sicher-daheim-9326706.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/3/1/4/3/5/7/mi_5_23_aufmacher_icloudhomekit_secure_video_copy_digital-c5f5ded4953febdc.jpg",
    "publishedAt": "2023-10-09T09:00:00Z",
    "content": "Inhaltsverzeichnis\r\nOb man einen Einbrecher auf frischer Tat ertappen, das Haustier aus der Ferne beobachten oder einen Blick auf das schlafende Baby im Kinderzimmer werfen will: Vernetzte, smarte Ka… [+2981 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "heise online"
    },
    "author": "Dr. Andreas Linke",
    "title": "heise+ | Nextcloud-Kalender in ein Android-Widget integrieren",
    "description": "Nextcloud enthält einen Kalender, der sich leicht in eigenen Apps verwenden lässt. Zusätzlich zum komplexen CalDAV-API kennt es nämlich einen schlanken Zugang.",
    "url": "https://www.heise.de/ratgeber/Nextcloud-Kalender-in-ein-Android-Widget-integrieren-9323020.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/3/1/2/2/8/4/ct2423nextcloud_126588_jow_a_online-71872115fc884691.jpg",
    "publishedAt": "2023-10-09T15:00:00Z",
    "content": "Inhaltsverzeichnis\r\nMehr zum Thema Softwareentwicklung\r\nWer seine Termine auf einem Android-Handy oder -Tablet pflegt, verwendet normalerweise den Google-Kalender. Das ist bequem, denn er ist standar… [+1936 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "heise online"
    },
    "author": "Steffen Herget",
    "title": "heise+ | Sechs leistungsstarke Tablets mit Android und iOS im Vergleich",
    "description": "Mittelklasse Tablets um die 500 Euro können in vielen Aspekten mit High-End-Tablets mithalten. Wir haben sechs Modelle beider Kategorien verglichen.",
    "url": "https://www.heise.de/tests/Sechs-leistungsstarke-Tablets-mit-Android-und-iOS-im-Vergleich-9315462.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
    "urlToImage": "https://heise.cloudimg.io/cdn/n/n/_www-heise-de_/imgs/18/4/3/0/8/2/5/1/7e4b45964b9fb53eada4d501cecab82acd1491914456ecc37f9ec8f35d0b504f-ea950df1307d5f86.gif",
    "publishedAt": "2023-10-09T07:00:00Z",
    "content": "Inhaltsverzeichnis\r\nMehr zu iPads und Tablets:\r\nWie viel High-End muss es sein? Die Frage stellt sich auch bei Tablets, denn die Preisspanne ist enorm. Günstige Modelle wechseln für kaum mehr als hun… [+3571 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Chance Miller",
    "title": "Tim Cook talks greenwashing, why there’s a new iPhone every year, and how he lowers his carbon footprint",
    "description": "On the heels of Apple’s environmental-focused iPhone 15 event, Apple CEO Tim Cook has sat down with Brut. Magazine to talk more about the company’s ambitions.\n\n\n\nThe Apple CEO touched on why Apple feels the need to release a new iPhone every year, what the iP…",
    "url": "https://9to5mac.com/2023/10/09/tim-cook-iphone-every-year-ev-greenwashing/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/10/Screen-Shot-2021-10-18-at-1.02.32-PM.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-10-09T14:00:09Z",
    "content": "On the heels of Apple’s environmental-focused iPhone 15 event, Apple CEO Tim Cook has sat down with Brut. Magazine to talk more about the company’s ambitions.\r\nThe Apple CEO touched on why Apple feel… [+3678 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Ben Lovejoy",
    "title": "Vision Pro weight still concerns Apple; prescription lens headache – Bloomberg",
    "description": "Mark Gurman’s latest newsletter says that Apple remains concerned about the Vision Pro’s weight, and is working on making the next generation of the headset lighter.\n\n\n\nGurman also describes the headaches the company is facing in dealing with the prescription…",
    "url": "https://9to5mac.com/2023/10/09/vision-pro-weight-concerns/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/10/Vision-Pro-weight.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-10-09T11:18:40Z",
    "content": "Mark Gurman’s latest newsletter says that Apple remains concerned about the Vision Pro’s weight and is working on making the next generation of the headset lighter.\r\nGurman also describes the difficu… [+3726 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Chance Miller",
    "title": "Samsung’s bizarre new ad pressures Apple to support RCS: ‘We’re bubbles too’",
    "description": "Samsung is apparently joining Google’s ongoing “Get The Message” ad campaign calling on Apple to adopt RCS. In a new ad posted to YouTube this week, Samsung claims that “green bubbles and blue bubbles want to be together.” \n\n\n\nRCS is the open messaging standa…",
    "url": "https://9to5mac.com/2023/10/09/samsung-apple-rcs-ad-romeo-and-juliet/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/05/imessage-rcs.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-10-09T20:55:48Z",
    "content": "Samsung is apparently joining Google’s ongoing “Get The Message” ad campaign calling on Apple to adopt RCS. In a new ad posted to YouTube this week, Samsung claims that “green bubbles and blue bubble… [+1987 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Benjamin Mayo",
    "title": "Ridley Scott will release 4-hour cut of Napoleon movie on Apple TV+",
    "description": "Apple original film Napoleon hits cinemas in November, starring Joaquin Phoenix and Vanessa Kirby. Director Ridley Scott has told Total Film Magazine that he is also working on an extended cut of the film, which will stream on Apple TV+.\n\n\n\nThe director’s cut…",
    "url": "https://9to5mac.com/2023/10/09/4-hour-napoleon-movie-apple-tv-plus/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/10/napoleon-apple-tv.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-10-09T09:26:41Z",
    "content": "Apple original film Napoleon hits cinemas in November, starring Joaquin Phoenix and Vanessa Kirby. Director Ridley Scott has told Total Film Magazine that he is also working on an extended cut of the… [+1549 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Ben Lovejoy",
    "title": "X Community Notes used to challenge ads by Apple and others",
    "description": "The Community Notes feature on X is being used to challenge claims made in ads by Apple, Samsung, Uber, and others.\n\n\n\nA report says that this is adding another barrier to the willingness of major brands to advertise on the troubled platform …\n\n\n\n more…",
    "url": "https://9to5mac.com/2023/10/09/x-community-notes-apple/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/10/X-Community-Notes.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-10-09T12:04:55Z",
    "content": "The Community Notes feature on X is being used to challenge claims made in ads by Apple, Samsung, Uber, and others.\r\nA report says that this is adding another barrier to the willingness of major bran… [+2161 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Seth Kurkowski",
    "title": "9to5Mac Daily: October 9, 2023 – iPhone 16 Pro camera rumors, Apple and DuckDuckGo",
    "description": "Listen to a recap of the top stories of the day from 9to5Mac. 9to5Mac Daily is available on iTunes and Apple’s Podcasts app, Stitcher, TuneIn, Google Play, or through our dedicated RSS feed for Overcast and other podcast players.\n\n\n\nConnect with us in the off…",
    "url": "https://9to5mac.com/2023/10/09/daily-october-9-2023/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/12/9to5Mac-Daily-art-lead.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-10-09T17:02:09Z",
    "content": "Listen to a recap of the top stories of the day from 9to5Mac. 9to5Mac Daily is available on iTunes and Apples Podcasts app, Stitcher, TuneIn, Google Play, or through our dedicated RSS feed for Overca… [+891 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Zac Hall",
    "title": "Apple Vision Pro mixed reality will make you feel bad for the Meta Quest 3",
    "description": "Mixed reality headset makers seem to face a choice: do it well, or do it cheap. Priced from $3500, Apple Vision Pro sure ain’t doing it cheap. The consensus from those who have tried Vision Pro, though, seems to be that the experience is technologically impre…",
    "url": "https://9to5mac.com/2023/10/09/meta-quest-3-mixed-reality-reviewed/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/10/meta-quest-3.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-10-09T19:39:49Z",
    "content": "Mixed reality headset makers seem to face a choice: do it well, or do it cheap. Priced from $3500, Apple Vision Pro sure ain’t doing it cheap. The consensus from those who have tried Vision Pro, thou… [+4381 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Ben Lovejoy",
    "title": "Genshin Impact developer with close relationship to Apple twice tried to evade 30% cut",
    "description": "The Chinese developer behind the hugely popular Genshin Impact mobile game has twice tried to evade Apple’s 30% cut on in-app purchases, according to a new report.\n\n\n\nThis is despite a close relationship between gaming giant miHoYo and Apple, including multip…",
    "url": "https://9to5mac.com/2023/10/09/genshin-impact-app-store/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/10/Genshin-Impact-Tim-Cook.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-10-09T13:42:04Z",
    "content": "The Chinese developer behind the hugely popular Genshin Impact mobile game has twice tried to evade Apple’s 30% cut on in-app purchases, according to a new report.\r\nThis is despite a close relationsh… [+2660 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Zac Hall",
    "title": "Ping My Watch comes to iPhone in iOS 17",
    "description": "You’ve always been able to ping your missing iPhone from your . Now with iOS 17, the iPhone can easily return the favor.\n\n\n\n more…",
    "url": "https://9to5mac.com/2023/10/09/ios-17-ping-my-watch/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/06/iOS-17-ping-my-watch.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-10-09T19:50:48Z",
    "content": "You’ve always been able to ping your missing iPhone from your Apple Watch. Now with iOS 17, the iPhone can easily return the favor.\r\nPinging your iPhone from the Apple Watch is simple. Click the side… [+1213 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Zac Hall",
    "title": "Apple’s iMessage targeted by DMA-equipped EU antitrust regulators",
    "description": "Should Apple’s blue bubbles be subject to the European Union’s recent Digital Market Act? That’s something the European Commission is investigating, according to people in the know.\n\n\n\n more…",
    "url": "https://9to5mac.com/2023/10/09/apples-imessage-targeted-by-dma-equipped-eu-antitrust-regulators/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/07/imessage.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-10-09T16:39:45Z",
    "content": "Should Apple’s blue bubbles be subject to the European Union’s recent Digital Market Act? That’s something the European Commission is investigating, according to people in the know.\r\nReuters says tha… [+1052 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Chance Miller",
    "title": "OLED iPad Air and iPad mini in the works, but don’t expect them anytime soon",
    "description": "Apple is widely expected to unveil all-new iPad Pro models sometime in early 2024, with one of the headlining changes being a switch to OLED displays. A new report today says that the iPad Air and iPad mini could also switch to OLED displays, but not until fu…",
    "url": "https://9to5mac.com/2023/10/09/report-oled-ipad-air-and-ipad-mini/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/07/iPad-mini-6-charging-issues.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-10-09T20:06:34Z",
    "content": "Apple is widely expected to unveil all-new iPad Pro models sometime in early 2024, with one of the headlining changes being a switch to OLED displays. A new report today says that the iPad Air and iP… [+1842 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Chance Miller",
    "title": "iPhone 15 uses new Qualcomm modem for upgraded 5G performance",
    "description": "One of the small but notable changes to the iPhone 15 Pro is the switch to Aualcomm’s new X70 modem for improved 5G performance. As it turns out, this change also applies to the entry-level iPhone 15 and iPhone 15 Plus. \n\n\n\n more…",
    "url": "https://9to5mac.com/2023/10/08/iphone-15-upgraded-5g-performance/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/10/F78uK9gbwAAaY9s.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-10-09T00:08:47Z",
    "content": "One of the small but notable changes to the iPhone 15 Pro is the switch to Aualcomm’s new X70 modem for improved 5G performance. As it turns out, this change also applies to the entry-level iPhone 15… [+1782 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Sponsored Post",
    "title": "Interview: Paperlike CEO talks about ongoing success & what the future of company entails",
    "description": "I have personally been a Paperlike customer since 2018. I bought my first iPad Pro in 2018 and my first accessory, besides the Apple Pencil, was a Paperlike screen protector. As someone who takes a lot of handwritten notes, I knew the best and only option was…",
    "url": "https://9to5mac.com/2023/10/09/interview-paperlike-ceo-talks-about-ongoing-success-what-the-future-of-company-entails/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/09/paperlike.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-10-09T14:41:05Z",
    "content": "I have personally been a Paperlike customer since 2018. I bought my first iPad Pro in 2018 and my first accessory, besides the Apple Pencil, was a Paperlike screen protector. As someone who takes a l… [+5408 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Rikka Altland",
    "title": "15-inch M2 MacBook Air falls to new $1,049 low, USB-C AirPods Pro 2 $200, more",
    "description": "A new all-time low is taking $250 off Apple’s 15-inch M2 MacBook Air. It’s headlining all of today’s best deals at $1,049 and is joined by a return to the all-time low on Apple’s all-new USB-C AirPods Pro 2 at $200. But there really is no beating the value of…",
    "url": "https://9to5mac.com/2023/10/09/15-inch-m2-macbook-air-airpods-pro-2-usb-c/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/06/15-macbook-air-vs-13-air.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-10-09T15:53:40Z",
    "content": "A new all-time low is taking $250 off Apples 15-inch M2 MacBook Air. It’s headlining all of today’s best deals at $1,049 and is joined by a return to the all-time low on Apples all-new USB-C AirPods … [+4218 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Michael Potuck",
    "title": "Share passwords on iPhone: How to use Family Passwords in iOS 17",
    "description": "iCloud Keychain gets a major improvement with iOS 17 – the ability to seamlessly share credentials with anyone. Follow along for a look at how to share passwords on iPhone in iOS 17 with the new iCloud Keychain feature. \n\n\n\n more…",
    "url": "https://9to5mac.com/2023/10/09/share-passwords-on-iphone-ios-17/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/06/share-passwords-on-iphone-ios-17.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-10-09T17:20:00Z",
    "content": "iCloud Keychain gets a major improvement with iOS 17 the ability to seamlessly share credentials with anyone. Follow along for a look at how to share passwords on iPhone in iOS 17 with the new iCloud… [+2498 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Rikka Altland",
    "title": "Best Prime Big Deal Days offers: 15-inch MacBook Air $250 off, AirPods Pro 2, more",
    "description": "Amazon’s fall Prime Big Deal Days savings event . As we do every time, the team at 9to5Toys will be working around the clock in order to highlight all of the best discounts. Ringing in all of the holiday shopping savings coming in the next few months, the sav…",
    "url": "https://9to5mac.com/2023/10/09/best-prime-big-deal-days-offers-apple/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/10/9to5Toys-Prime-Big-Deal-Days.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-10-09T19:25:00Z",
    "content": "Amazon’s fall Prime Big Deal Days savings event has arrived. As we do every time, the team at 9to5Toys will be working around the clock in order to highlight all of the best discounts. Ringing in all… [+2724 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Ben Lovejoy",
    "title": "Feature request: Let me snapshot my smart home to auto-create a scene",
    "description": "The vast majority of my smart home control comprises asking Siri to activate a scene – or having one automatically triggered by a time or event. For example, when going to bed, a single command switches on low lighting in the bedroom while switching off all o…",
    "url": "https://9to5mac.com/2023/10/09/snapshot-my-smart-home/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/10/snapshot-my-smart-home.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-10-09T14:39:03Z",
    "content": "The vast majority of my smart home control comprises asking Siri to activate a scene or having one automatically triggered by a time or event. For example, when going to bed, a single command switche… [+1422 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Android Police"
    },
    "author": "Manuel Vonau",
    "title": "What’s new in Chrome 119: Saving and syncing tab groups",
    "description": "Tab groups are becoming more and more useful",
    "url": "https://www.androidpolice.com/google-chrome-119/",
    "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/03/whats-new-in-chrome-ap-hero.jpg",
    "publishedAt": "2023-10-09T10:47:19Z",
    "content": "Just a few days after Google Chrome 118 launched in stable, the next Chrome release is here in beta: Chrome 119. The new version of the browser is slated to go stable in as little as two weeks on Oct… [+3112 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Food52.com"
    },
    "author": "Anabelle Doliner",
    "title": "It's Butternut Squash Season—These Are Our Favorite Recipes to Make",
    "description": "Butternut squash is one of our most reliable, go-to staple ingredients during the fall. They’re versatile (use ‘em for savory or sweet dishes), slow to spoil (they last one to three months stored whole at room temperature), and have a cozy flavor we’re big fa…",
    "url": "https://food52.com/blog/28321-best-butternut-squash-recipes-for-fall",
    "urlToImage": "https://images.food52.com/t0HKJBUlv0an3DjnH-AXQjZ0-HA=/fit-in/1200x1200/c841f2d9-33ba-45e0-8e17-ae58b33d5437--2019-1001_ottolenghi-butternut-squash_3x2_julia-gartland_249.jpg",
    "publishedAt": "2023-10-09T18:26:02Z",
    "content": "Butternut squash is one of our most reliable, go-to staple ingredients during the fall. Theyre versatile (use em for savory or sweet dishes), slow to spoil (they last one to three months stored whole… [+1554 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (William Gallagher)",
    "title": "Ridley Scott prepares extended 'Napoleon' for Apple TV+",
    "description": "Director Ridley Scott is working on a special edition of his and writer David Scarpa's forthcoming \"Napoleon,\" and hopes it will be streamed on Apple TV+.Napoleon (Source: Apple)Scott has said before that he hopes Apple TV+ will screen his director's cut of \"…",
    "url": "https://appleinsider.com/articles/23/10/09/ridley-scott-prepares-extended-napoleon-for-apple-tv",
    "urlToImage": "https://photos5.appleinsider.com/gallery/56067-113826-000-lead-Napoleon-xl.jpg",
    "publishedAt": "2023-10-09T10:57:34Z",
    "content": "Napoleon (Source: Apple)\r\nDirector Ridley Scott is working on a special edition of his and writer David Scarpa's forthcoming \"Napoleon,\" and hopes it will be streamed on Apple TV+.\r\nScott has said be… [+1148 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (William Gallagher)",
    "title": "Tim Cook defends Apple against greenwashing accusation",
    "description": "Apple CEO Tim Cook says greenwashing \"is reprehensible\" and has shown environmental journalists around the company's previously secret data center.Apple CEO Tim CookIt's another in a series of Tim Cook's post-iPhone 15 launch interviews, but it was rather mor…",
    "url": "https://appleinsider.com/articles/23/10/09/tim-cook-defends-apple-against-greenwashing-accusation",
    "urlToImage": "https://photos5.appleinsider.com/gallery/56603-115064-53768-108149-52740-105484-000-lead-Tim-Cook-xl-xl-xl.jpg",
    "publishedAt": "2023-10-09T14:45:56Z",
    "content": "Apple CEO Tim Cook\r\nApple CEO Tim Cook says greenwashing \"is reprehensible\" and has shown environmental journalists around the company's previously secret data center.\r\nIt's another in a series of Ti… [+3208 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Malcolm Owen)",
    "title": "iPhone 15 teardown reveals updated Qualcomm 5G modem",
    "description": "Instead of keeping the iPhone 14 Pro's 5G Qualcomm modem, Apple has included an updated one in the iPhone 15 and iPhone 15 Plus, with Qualcomm's X70 5G modem in use for this year's releases.[Twitter/@MokhtariShahram]Tweets by iFixit lead teardown technician S…",
    "url": "https://appleinsider.com/articles/23/10/09/iphone-15-teardown-reveals-updated-qualcomm-5g-modem",
    "urlToImage": "https://photos5.appleinsider.com/gallery/56712-115308-qualcomm-modem-change-xl.jpg",
    "publishedAt": "2023-10-09T11:16:06Z",
    "content": "[Twitter/@MokhtariShahram]\r\nInstead of keeping the iPhone 14 Pro's 5G Qualcomm modem, Apple has included an updated one in the iPhone 15 and iPhone 15 Plus, with Qualcomm's X70 5G modem in use for th… [+1780 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Malcolm Owen)",
    "title": "Rumored OLED iPad Pro expected to arrive in early 2024",
    "description": "Apple will be bringing out a new OLED iPad in 2024, analysts claim, with the iPad Pro expected to be the first Apple tablet to use the display technology.iPad ProAn OLED iPad has surfaced in multiple rumors in the past, with a higher-quality display expected …",
    "url": "https://appleinsider.com/articles/23/10/09/rumored-oled-ipad-pro-expected-to-arrive-in-early-2024",
    "urlToImage": "https://photos5.appleinsider.com/gallery/56720-115324-53210-106617-51057-100837-11-inch-iPad-Pro-xl-xl-xl.jpg",
    "publishedAt": "2023-10-09T16:35:42Z",
    "content": "iPad Pro\r\nApple will be bringing out a new OLED iPad in 2024, analysts claim, with the iPad Pro expected to be the first Apple tablet to use the display technology. \r\nAn OLED iPad has surfaced in mul… [+1887 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Peter Cohen)",
    "title": "What's really going on with Apple's modem chip efforts?",
    "description": "A recent report suggests Apple's in over its head with it's iPhone modem efforts, but — to borrow a phrase — we think differently.Apple is trying to make its own 5G modem for the iPhoneApple knows what it's doing and knew what it was getting into from the sta…",
    "url": "https://appleinsider.com/articles/23/10/09/whats-really-going-on-with-apples-modem-chip-efforts",
    "urlToImage": "https://photos5.appleinsider.com/gallery/48177-94120-46199-89933-000-lead-5G-xl-xl.jpg",
    "publishedAt": "2023-10-09T13:58:14Z",
    "content": "Apple is trying to make its own 5G modem for the iPhone\r\nA recent report suggests Apple's in over its head with it's iPhone modem efforts, but — to borrow a phrase — we think differently.\r\nApple know… [+10918 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Malcolm Owen)",
    "title": "Apple Watch Series 9 vs Google Pixel Watch 2 -- Specs, price, and features, compared",
    "description": "Google's latest attempt at a smartwatch puts its Pixel Watch 2 against the Apple Watch Series 9. Here's how the specs of the new wearables compare.Apple Watch Series 9 vs Google Pixel Watch 2In a live event on October 4, Google introduced its latest batch of …",
    "url": "https://appleinsider.com/inside/apple-watch-series-9/vs/apple-watch-series-9-vs-google-pixel-watch-2----specs-price-and-features-compared",
    "urlToImage": "https://photos5.appleinsider.com/gallery/56696-115279-awgp2header-xl.jpg",
    "publishedAt": "2023-10-09T12:32:01Z",
    "content": "Apple Watch Series 9 vs Google Pixel Watch 2\r\nGoogle's latest attempt at a smartwatch puts its Pixel Watch 2 against the Apple Watch Series 9. Here's how the specs of the new wearables compare.\r\nIn a… [+10776 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Michael Stroup)",
    "title": "Shoppers can save up to $550 with early Fall Prime Day Apple deals from Amazon",
    "description": "Amazon is gearing up for Fall Prime Day with a gigantic collection of sales on Apple products from up and down the lineup. Take home the latest gear, including the 15-inch M2 MacBook Air, on sale for only $1,049.Early Fall Prime Day deals from Amazon.Other gr…",
    "url": "https://appleinsider.com/articles/23/10/09/shoppers-can-save-up-to-550-with-early-fall-prime-day-apple-deals-from-amazon",
    "urlToImage": "https://photos5.appleinsider.com/gallery/56722-115323-Untitled-design-(71)-xl.jpg",
    "publishedAt": "2023-10-09T17:29:16Z",
    "content": "Early Fall Prime Day deals from Amazon.\r\nAmazon is gearing up for Fall Prime Day with a gigantic collection of sales on Apple products from up and down the lineup. Take home the latest gear, includin… [+2668 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (William Gallagher)",
    "title": "Genshin Impact maker tried to dodge App Store fees -- twice",
    "description": "Despite being Apple's poster child for iPhone gaming, the developer behind \"Genshin Impact\" twice tried to get around paying the App Store's 30% fee.The App Store is a powerful digital ecosystem.\"Genshin Impact\" has previously won an Apple Design Award, and i…",
    "url": "https://appleinsider.com/articles/23/10/09/genshin-impact-maker-tried-to-dodge-app-store-fees----twice",
    "urlToImage": "https://photos5.appleinsider.com/gallery/52114-103624-The-App-Store-logo-on-iOS----resized-xl.jpg",
    "publishedAt": "2023-10-09T15:28:25Z",
    "content": "The App Store is a powerful digital ecosystem.\r\nDespite being Apple's poster child for iPhone gaming, the developer behind \"Genshin Impact\" twice tried to get around paying the App Store's 30% fee.\r\n… [+1040 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Andrew O'Hara)",
    "title": "Samsung SmartThings, Nanoleaf holiday lights, and smart smoke detector on HomeKit Insider",
    "description": "On this week's episode of the HomeKit Insider podcast, your hosts discuss Samsung's SmartThings improvements, the Owl smoke detector, and an impressive home garden.HomeKit InsiderAndrew rode solo this week on the podcast as he dove into the limited news since…",
    "url": "https://appleinsider.com/articles/23/10/09/samsung-smartthings-nanoleaf-holiday-lights-and-smart-smoke-detector-on-homekit-insider",
    "urlToImage": "https://photos5.appleinsider.com/gallery/46889-91403-HKI-Header-xl.jpg",
    "publishedAt": "2023-10-09T13:28:48Z",
    "content": "HomeKit Insider\r\nOn this week's episode of the HomeKit Insider podcast, your hosts discuss Samsung's SmartThings improvements, the Owl smoke detector, and an impressive home garden.\r\nAndrew rode solo… [+2066 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Malcolm Owen)",
    "title": "Duelling analysts offer differing takes on Mac in the PC market",
    "description": "Some analysts say that Apple is continuing to see success in the PC market with growth in market share in sequential quarters, while others point to a continued worsening for the market as a whole.MacBook ProThe PC market has undergone a second quarter in a r…",
    "url": "https://appleinsider.com/articles/23/10/09/duelling-analysts-offer-differing-takes-on-mac-in-the-pc-market",
    "urlToImage": "https://photos5.appleinsider.com/gallery/56725-115339-56044-113762-54138-109076-000-lead-Macbook-Pro-xl-xl-1-xl.jpg",
    "publishedAt": "2023-10-09T20:25:10Z",
    "content": "MacBook Pro\r\nSome analysts say that Apple is continuing to see success in the PC market with growth in market share in sequential quarters, while others point to a continued worsening for the market … [+1998 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Malcolm Owen)",
    "title": "Europe asks if Digital Markets Act should apply to iMessage",
    "description": "EU officials are asking rivals of the tech giants whether Apple's iMessage should be subjected to the rules of the Digital Markets Act, to help determine the next course of action for the regulators.European flagsThe European Union's Digital Markets Act (DMA)…",
    "url": "https://appleinsider.com/articles/23/10/09/europe-asks-if-digital-markets-act-should-apply-to-imessage",
    "urlToImage": "https://photos5.appleinsider.com/gallery/56723-115329-55303-112333-54627-110431-49422-96585-EU-Header-xl-xl-xl-xl.jpg",
    "publishedAt": "2023-10-09T18:22:55Z",
    "content": "European flags\r\nEU officials are asking rivals of the tech giants whether Apple's iMessage should be subjected to the rules of the Digital Markets Act, to help determine the next course of action for… [+1214 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Jess Pingrey)",
    "title": "Daily deals Oct. 9: 15-inch MacBook Air $1,049, AirPods Pro USB-C $199, $50 off $100 Amazon Fresh, more",
    "description": "Today's top deals include $1,000 off a Kawai 88-key portable digital piano, 56% off a Monoprice mini LCD resin 3D printer, 25% off a Vizio M-Series Elevate soundbar, 33% off a 2023 75\" Hisense Class U6 Series Google Smart TV, and more.Save $250 on a 2023 15-i…",
    "url": "https://appleinsider.com/articles/23/10/09/daily-deals-oct-9-15-inch-macbook-air-1049-airpods-pro-usb-c-199-50-off-100-amazon-fresh-more",
    "urlToImage": "https://photos5.appleinsider.com/gallery/56706-115312-daily-deals-oct-9-xl.jpg",
    "publishedAt": "2023-10-09T14:18:12Z",
    "content": "Save $250 on a 2023 15-inch MacBook Air\r\nToday's top deals include $1,000 off a Kawai 88-key portable digital piano, 56% off a Monoprice mini LCD resin 3D printer, 25% off a Vizio M-Series Elevate so… [+3947 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Mike Wuerthele)",
    "title": "How to build the ultimate iPhone 15 Pro 4K60 ProRes video recording rig",
    "description": "Shooting 4K60 ProRes video on an iPhone 15 Pro with just external storage or just an external microphone is easy. What's harder is doing it all at the same time. Here's what you need to do it.An iPhone 15 Pro is now a viable camera system for some videographe…",
    "url": "https://appleinsider.com/inside/iphone-15-pro/tips/how-to-build-the-ultimate-iphone-15-pro-4k60-prores-video-recording-rig",
    "urlToImage": "https://photos5.appleinsider.com/gallery/56661-115332-iphonefilmingcomposite-xl.jpg",
    "publishedAt": "2023-10-09T19:48:11Z",
    "content": "An iPhone 15 Pro is now a viable camera system for some videographers. \r\nShooting 4K60 ProRes video on an iPhone 15 Pro with just external storage or just an external microphone is easy. What's harde… [+15725 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yanko Design"
    },
    "author": "Sarang Sheth",
    "title": "The AirTag Gets Tough Competition from This Razor Slim Credit-Card-Sized Tracker with Apple Find My",
    "description": "The AirTag Gets Tough Competition from This Razor Slim Credit-Card-Sized Tracker with Apple Find MyWhat I find disappointing about the AirTag is that it’s the one recent product Apple truly needs to redesign, but hasn’t in the past two...",
    "url": "https://www.yankodesign.com/2023/10/08/the-airtag-gets-tough-competition-from-this-razor-slim-credit-card-sized-tracker-with-apple-find-my/",
    "urlToImage": "https://www.yankodesign.com/images/design_news/2023/10/tracker_as_thin_as_a_credit_card_hero.jpg",
    "publishedAt": "2023-10-09T01:45:56Z",
    "content": "What I find disappointing about the AirTag is that it’s the one recent product Apple truly needs to redesign, but hasn’t in the past two years. The Watch, AirPods, iPhone, iPad, and MacBook have ALL … [+3870 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yanko Design"
    },
    "author": "Srishti Mitra",
    "title": "Top 10 Clever Accessories To Give Your Bicycle A Level-Up Makeover",
    "description": "Top 10 Clever Accessories To Give Your Bicycle A Level-Up MakeoverIf in this era of pollution, chaos, and panic, you aren’t already a bicycle person, it’s high time you convert into one! Bicycles are slowly...",
    "url": "https://www.yankodesign.com/2023/10/09/top-10-clever-accessories-to-give-your-bicycle-a-level-up-makeover/",
    "urlToImage": "https://www.yankodesign.com/images/design_news/2023/09/top-10-bicycle-accessories/top_10_bicycle_accessories_yanko_design_hero.jpg",
    "publishedAt": "2023-10-09T11:40:49Z",
    "content": "If in this era of pollution, chaos, and panic, you arent already a bicycle person, its high time you convert into one! Bicycles are slowly becoming peoples preferred means of transportation. People a… [+7940 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Windows Central"
    },
    "author": "zac.bowden@futurenet.com (Zac Bowden)",
    "title": "The lightest 16-inch laptop in the WORLD is $300 off for Prime Day",
    "description": "Amazon Prime Big Deal Days is now in full swing, and we've found an excellent deal on LG's super light Gram 16 laptop.",
    "url": "https://www.windowscentral.com/hardware/laptops/the-lightest-16-inch-laptop-in-the-world-is-dollar300-off-for-prime-day",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/sFsGHzygGrtMwzupRnCKa7-1200-80.jpg",
    "publishedAt": "2023-10-09T17:52:33Z",
    "content": "It's that time of year again, with Amazon Prime Big Deal Days now in full swing on hundreds of products, many of which we use day to day. One such product is the LG Gram 16, which is one of LG's star… [+3015 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Journal du geek"
    },
    "author": "tristan carballeda",
    "title": "Meta a un plan pour battre le Vision Pro d’Apple",
    "description": "Le groupe Meta a \"un plan\" pour battre Apple et dominer le marché de la réalité virtuelle lorsque ce dernier va exploser. \nMeta a un plan pour battre le Vision Pro d’Apple",
    "url": "https://www.journaldugeek.com/2023/10/09/meta-a-un-plan-pour-battre-le-vision-pro-dapple/",
    "urlToImage": "https://www.journaldugeek.com/content/uploads/2023/09/meta-quest-3-experience.jpg",
    "publishedAt": "2023-10-09T16:00:21Z",
    "content": "Le groupe Meta a \"un plan\" pour battre Apple et dominer le marché de la réalité virtuelle lorsque ce dernier va exploser.Apple a présenté en juin dernier son Vision Pro. Le premier « ordinateur spati… [+2686 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Journal du geek"
    },
    "author": "Journal du Geek",
    "title": "Prime Day : Amazon massacre les prix, voici 10 deals de FOU ",
    "description": "Cela faisait des semaines qu'Amazon nous faisait le teasing, il est désormais là : le Prime Day s'étale du 10 au 11 octobre et il promet des rabais XXL sur vos produits préférés. Voici une sélection pour vous.\nPrime Day : Amazon massacre les prix, voici 10 de…",
    "url": "https://www.journaldugeek.com/bon-plan/prime-day-amazon-massacre-les-prix-voici-le-top-10-pour-ce-mardi/",
    "urlToImage": "https://www.journaldugeek.com/content/uploads/2022/11/black-friday-direct.jpg",
    "publishedAt": "2023-10-09T15:40:19Z",
    "content": "Cela faisait des semaines qu'Amazon nous faisait le teasing, il est désormais là : le Prime Day s'étale du 10 au 11 octobre et il promet des rabais XXL sur vos produits préférés. Voici une sélection … [+5667 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Journal du geek"
    },
    "author": "Amandine Jonniaux",
    "title": "Prix exorbitants et consommation énergétique : la face cachée du Las Vegas Sphere",
    "description": "Derrière les paillettes de la Sphere de Las Vegas, se cache un énorme gouffre énergétique. \nPrix exorbitants et consommation énergétique : la face cachée du Las Vegas Sphere",
    "url": "https://www.journaldugeek.com/2023/10/09/prix-exorbitants-et-consommation-energetique-la-face-cachee-du-las-vegas-sphere/",
    "urlToImage": "https://www.journaldugeek.com/content/uploads/2023/10/template-jdg-2023-10-09t093542-857.jpg",
    "publishedAt": "2023-10-09T08:09:09Z",
    "content": "Derrière les paillettes de la Sphere de Las Vegas, se cache un énorme gouffre énergétique.Depuis quelques jours, le monde entier s’extasie devant les rediffusions du concert de U2 à Las Vegas, dans u… [+2543 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Journal du geek"
    },
    "author": "Thomas Estimbre",
    "title": "Pixel : Google est-il en train de devenir un géant du marché ?",
    "description": "Google vient de lancer ses Pixel 8 et la marque espère franchir un nouveau cap. Les ventes de Pixel progressent rapidement depuis quelques années. Il est toutefois encore trop tôt pour considérer Google comme un acteur majeur.\nPixel : Google est-il en train d…",
    "url": "https://www.journaldugeek.com/2023/10/09/pixel-google-est-il-en-train-de-devenir-un-geant-du-marche/",
    "urlToImage": "https://www.journaldugeek.com/content/uploads/2023/07/google-pixel-7-7-pro.jpg",
    "publishedAt": "2023-10-09T15:00:12Z",
    "content": "Google vient de lancer ses Pixel 8 et la marque espère franchir un nouveau cap. Les ventes de Pixel progressent rapidement depuis quelques années. Il est toutefois encore trop tôt pour considérer Goo… [+3855 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Journal du geek"
    },
    "author": "Anh Phan",
    "title": "Test Jabra Elite 10, le confort au service du son",
    "description": "Annoncé à la rentrée le mois dernier pendant l'IFA 2023 de Berlin, voici notre test des Jabra Elite 10, les nouveaux écouteurs du constructeur danois.\nTest Jabra Elite 10, le confort au service du son",
    "url": "https://www.journaldugeek.com/test/test-jabra-elite-10-le-confort-au-service-du-son/",
    "urlToImage": "https://www.journaldugeek.com/content/uploads/2023/10/jabra-elite-10-live-02.jpg",
    "publishedAt": "2023-10-09T15:15:23Z",
    "content": "Annoncé à la rentrée le mois dernier pendant l'IFA 2023 de Berlin, voici notre test des Jabra Elite 10, les nouveaux écouteurs du constructeur danois.Nous on le voit parce quon baigne dans le milieu … [+4384 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "A Beautiful Mess"
    },
    "author": "Jillian Grover",
    "title": "Episode #204: Halloween Favorites",
    "description": "It’s October and that means Halloween time!!! It’s one of our favorite holidays, so today we are discussing all our favorite Halloween things. You can find the podcast posts archive here. A big thank you to our sponsors! Check out the offers from Shopify, Bet…",
    "url": "https://abeautifulmess.com/episode-204-halloween-favorites/",
    "urlToImage": "https://abeautifulmess.com/wp-content/uploads/2021/10/elsie-larson-pumpkin-patch-scaled.jpg",
    "publishedAt": "2023-10-09T13:01:00Z",
    "content": "Its October and that means Halloween time!!! Its one of our favorite holidays, so today we are discussing all our favorite Halloween things.\r\nYou can find the podcast posts archive here.\r\nA big thank… [+41861 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Theregister.com"
    },
    "author": "Brandon Vigliarolo",
    "title": "Chinese smart TV boxes infected with malware in PEACHPIT ad fraud campaign",
    "description": "PLUS: Sony admits to MoveITbreach; Blackbaud fined again, Qakbot's sorta back from the dead; and more\nInfosec in brief Bot defense software vendor Human Security last week detailed an attack that \"sold off-brand mobile and Connected TV (CTV) devices on popula…",
    "url": "https://www.theregister.com/2023/10/09/in_brief_security/",
    "urlToImage": "https://regmedia.co.uk/2021/11/17/time_shutterstock.jpg",
    "publishedAt": "2023-10-09T01:27:10Z",
    "content": "Infosec in brief Bot defense software vendor Human Security last week detailed an attack that \"sold off-brand mobile and Connected TV (CTV) devices on popular online retailers and resale sites preloa… [+8535 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Jesús Quesada",
    "title": "Los mejores chollos en dispositivos Apple antes de la Fiesta de Ofertas Prime de Amazon: iPhone, iPad, Apple Watch y más",
    "description": "Apenas faltan horas para que comience la Fiesta de Ofertas Prime de Amazon, un evento que se llevará a cabo durante los días 10 y 11 de octubre en el que habrá descuentos en miles de productos de todo tipo de categorías, incluidos en dispositivos electrónicos…",
    "url": "https://www.applesfera.com/seleccion/mejores-chollos-dispositivos-apple-antes-fiesta-ofertas-prime-amazon-iphone-ipad-apple-watch",
    "urlToImage": "https://i.blogs.es/fe4975/pre-fiesta-ofertas-prime/840_560.jpeg",
    "publishedAt": "2023-10-09T08:01:04Z",
    "content": "Apenas faltan horas para que comience la Fiesta de Ofertas Prime de Amazon, un evento que se llevará a cabo durante los días 10 y 11 de octubre en el que habrá descuentos en miles de productos de tod… [+3846 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Jesús Quesada",
    "title": "Los mejores chollos de baterías MagSafe para iPhone en la Fiesta de Ofertas Prime de Amazon",
    "description": "La Fiesta de Ofertas Prime de Amazon ya está aquí con descuentos en todo tipo de artículos, incluidos dispositivos electrónicos y otros productos tecnológicos. Si tienes un iPhone compatible con MagSafe, te proponemos cinco baterías externas que hacen uso de …",
    "url": "https://www.applesfera.com/seleccion/mejores-chollos-baterias-magsafe-para-iphone-fiesta-ofertas-prime-amazon",
    "urlToImage": "https://i.blogs.es/32521b/baterias-magsafe/840_560.jpeg",
    "publishedAt": "2023-10-09T22:41:40Z",
    "content": "La Fiesta de Ofertas Prime de Amazon ya está aquí con descuentos en todo tipo de artículos, incluidos dispositivos electrónicos y otros productos tecnológicos. Si tienes un iPhone compatible con MagS… [+3776 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Isra Fdez",
    "title": "Usuarios del iPhone 15 y iOS 17 están teniendo problemas con la conexión WiFi: posibles razones",
    "description": "Durante la semana pasada un mensaje cruzó todo internet: los nuevos iPhone 15 Pro se sobrecalentaban. Si bien no era fácil comprobar de dónde nacía este problema —hasta que Apple reconoció que se debía a un bug de iOS 17 y a algunas apps de terceros mal imple…",
    "url": "https://www.applesfera.com/ios/usuarios-iphone-15-ios-17-estan-teniendo-problemas-conexion-wifi-posibles-razones",
    "urlToImage": "https://i.blogs.es/05db6e/wifi-iphone/840_560.jpeg",
    "publishedAt": "2023-10-09T14:01:05Z",
    "content": "Durante la semana pasada un mensaje cruzó todo internet: los nuevos iPhone 15 Prose sobrecalentaban. Si bien no era fácil comprobar de dónde nacía este problema hasta que Apple reconoció que se debía… [+2970 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Jesús Quesada",
    "title": "Fiesta de ofertas Amazon Prime Day de octubre 2023. Qué es, cuándo es, a qué hora empieza y quién puede beneficiarse",
    "description": "A todo el mundo le gusta una buena oferta. Cada vez es más habitual encontrar campañas semanales con descuentos en todo tipo de artículos con los que ahorrar un dinero. Y esto se aprecia sobre todo en los dispositivos electrónicos, ya que suelen ser bastante …",
    "url": "https://www.applesfera.com/seleccion/fiesta-ofertas-amazon-prime-day-octubre-2023-que-cuando-a-que-hora-empieza-quien-puede-beneficiarse",
    "urlToImage": "https://i.blogs.es/54cf2f/fiesta-de-ofertas-prime-final-02/840_560.jpeg",
    "publishedAt": "2023-10-09T15:32:46Z",
    "content": "A todo el mundo le gusta una buena oferta. Cada vez es más habitual encontrar campañas semanales con descuentos en todo tipo de artículos con los que ahorrar un dinero. Y esto se aprecia sobre todo e… [+4706 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Miguel López",
    "title": "Casi treinta años después, la policía da con el asesino de Tupac gracias a la pista más extraña: un iPhone y varios iPad",
    "description": "En verano de 1996, el famoso rapero Tupac Shapur fue tiroteado en un cruce cerca de Las Vegas. 25 días después, el artista sucumbía a sus heridas en el hospital y fallecía. El mundo de la música fue sacudido por el asesinato, pero durante años no ha habido ni…",
    "url": "https://www.applesfera.com/ipad/casi-treinta-anos-despues-la-policia-da-con-el-asesino-de-tupac-gracias-a-la-pista-mas-extrana-un-iphone-y-varios-ipad",
    "urlToImage": "https://i.blogs.es/cd15f5/tupac-ipad/840_560.jpeg",
    "publishedAt": "2023-10-09T09:02:34Z",
    "content": "En verano de 1996, el famoso rapero Tupac Shapur fue tiroteado en un cruce cerca de Las Vegas. 25 días después, el artista sucumbía a sus heridas en el hospital y fallecía. El mundo de la música fue … [+2081 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Fran Bouzas",
    "title": "Cómo hacer el anuario de los 90 creado con Inteligencia Artificial completamente gratis desde tu iPhone",
    "description": "¿Quieres vivir la experiencia de graduarte en los años 90? Un título académico no te podemos dar, pero sí que te podemos enseñar a utilizar tu iPhone para crear tu propio anuario inspirado en la época. Es algo que se está convirtiendo en tendencia en TikTok y…",
    "url": "https://www.applesfera.com/tutoriales/como-hacer-anuario-90-creado-inteligencia-artificial-completamente-gratis-tu-iphone",
    "urlToImage": "https://i.blogs.es/1f6459/65217693f44eb714395d89e4/840_560.jpeg",
    "publishedAt": "2023-10-09T17:07:01Z",
    "content": "¿Quieres vivir la experiencia de graduarte en los años 90? Un título académico no te podemos dar, pero sí que te podemos enseñar a utilizar tu iPhone para crear tu propio anuario inspirado en la époc… [+2057 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Miguel López",
    "title": "19 consejos y recomendaciones para que la batería de tu iPhone 15 dure más",
    "description": "Te has comprado el nuevo iPhone 15 o un iPhone 15 Pro, lo has actualizado a iOS 17.0.3 para que los problemas de sobrecalentamiento dejen de existir y ya disfrutas de todas sus novedades. Pero con un iPhone nuevo siempre quieres empezar con buen pie, con los …",
    "url": "https://www.applesfera.com/ios/19-consejos-recomendaciones-bateria-tu-iphone-15-dure",
    "urlToImage": "https://i.blogs.es/988a64/captura-de-pantalla-2023-10-09-a-las-12.41.00/840_560.jpeg",
    "publishedAt": "2023-10-09T12:01:06Z",
    "content": "Te has comprado el nuevo iPhone 15 o un iPhone 15 Pro, lo has actualizado a iOS 17.0.3 para que los problemas de sobrecalentamiento dejen de existir y ya disfrutas de todas sus novedades. Pero con un… [+8139 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Fran Bouzas",
    "title": "Inventan un dispositivo que convierte un iPhone en un telescopio",
    "description": "¿Te imaginas utilizar tu iPhone para observar el cosmos? Muchos directores los utilizan en películas, series, y producciones de todo tipo. Su cámara, en especial la del iPhone 15 Pro Max, alcanza un nivel de calidad difícil de imaginar hace unos años. Es de e…",
    "url": "https://www.applesfera.com/accesorios/inventan-dispositivo-que-convierte-iphone-telescopio",
    "urlToImage": "https://i.blogs.es/8f0c73/1686132598648057763edb42/840_560.png",
    "publishedAt": "2023-10-09T15:30:04Z",
    "content": "¿Te imaginas utilizar tu iPhone para observar el cosmos? Muchos directores los utilizan en películas, series, y producciones de todo tipo. Su cámara, en especial la del iPhone 15 Pro Max, alcanza un … [+2399 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Fran Bouzas",
    "title": "El CEO de Airbnb salvó a la empresa de la bancarrota aplicando una idea de Steve Jobs",
    "description": "Airbnb surge tras una idea muy sencilla de sus fundadores. El concepto original era el de “sofá y desayuno”. Es decir, dejar dormir a alguien en el sofá de tu casa, darle de desayunar, y a cambio sacarte un dinero extra. Con el tiempo, esa visión fue derivand…",
    "url": "https://www.applesfera.com/curiosidades/ceo-airbnb-salvo-a-empresa-bancarrota-aplicando-idea-steve-jobs",
    "urlToImage": "https://i.blogs.es/396d06/steve-jobs-airbnb/840_560.jpeg",
    "publishedAt": "2023-10-09T10:49:21Z",
    "content": "Decir que Airbnb es el hotel más grande del mundo, no sería del todo descabellado.  Su concepto original era el de sofá y desayuno. Es decir, dejar dormir a alguien en el sofá de tu casa, darle de de… [+2078 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MakeUseOf"
    },
    "author": "Kanza Javed",
    "title": "4 Rumored Features That Didn’t Make It Into Android 14",
    "description": "While Android 14 packs some interesting new features, not everything that had been rumored to be included made the cut. Here's what's missing.",
    "url": "https://www.makeuseof.com/android-14-missing-features/",
    "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/03/android-14-logo-on-a-plain-background.jpg",
    "publishedAt": "2023-10-09T11:10:29Z",
    "content": "On October 4, 2023, Google took the wraps off Android 14, internally called Upside Down Cake. This update stands out for its enhanced customization, extended battery life, and refined experience on l… [+3906 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MakeUseOf"
    },
    "author": "James Frew",
    "title": "What Is USB-C Audio and How Does It Work?",
    "description": "With phone manufacturers ditching the 3.5mm jack, USB-C audio is effectively your best option.",
    "url": "https://www.makeuseof.com/tag/3-5mm-audio-jacks-successor-usb-type-c-audio/",
    "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/10/smartphone-on-table-with-usb-c-to-3-5mm-adapter-feature.jpg",
    "publishedAt": "2023-10-09T12:41:10Z",
    "content": "Key Takeaways\r\n<ul><li> USB Type-C Audio has its benefits, such as freeing up space inside devices and allowing for external DACs, but there are also drawbacks, like compatibility issues and the need… [+9950 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "DIYphotography"
    },
    "author": "John Aldred",
    "title": "Blackmagic Camera App 1.1 adds Tentacle Sync and Tilta Nucleus Nano support",
    "description": "The Blackmagic Camera App for iPhones (download here) has proven to be pretty popular. This isn’t much of a surprise, considering they’re giving it away for free. It essentially reproduces the look and feel of a Blackmagic camera on your iPhone. Blackmagic ha…",
    "url": "https://www.diyphotography.net/blackmagic-camera-app-1-1-adds-tentacle-sync-and-tilta-nucleus-nano-support/",
    "urlToImage": "https://www.diyphotography.net/wp-content/uploads/2023/09/Blackmagic-Camera.jpg",
    "publishedAt": "2023-10-09T18:23:49Z",
    "content": "The Blackmagic Camera App for iPhones (download here) has proven to be pretty popular. This isn’t much of a surprise, considering they’re giving it away for free. It essentially reproduces the look a… [+3101 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Theregister.com"
    },
    "author": "Liam Proven",
    "title": "Apple antique aficionados can boot to the future with OpenCore Legacy Patcher",
    "description": "Hackintoshing reaches a wider audience – owners of older Macs\nFOSS Fest As Apple distances itself from older kit, the OpenCore Legacy Patcher tool should win new fans.…",
    "url": "https://www.theregister.com/2023/10/09/opencore_legacy_patcher/",
    "urlToImage": "https://regmedia.co.uk/2018/02/22/teaser.jpg",
    "publishedAt": "2023-10-09T09:16:10Z",
    "content": "FOSS Fest As Apple distances itself from older kit, the OpenCore Legacy Patcher tool should win new fans.\r\nThese days, there are two types of people who want to install and run macOS on unauthorized … [+4407 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Phandroid - News for Android"
    },
    "author": "Tyler Lee",
    "title": "Google’s Pixel phone shipments are growing despite limited market availability",
    "description": "The latest data has revealed that to date, Google has shipped close to 40 million Pixel handsets and it is expected to keep growing.\nThe post Google’s Pixel phone shipments are growing despite limited market availability appeared first on Phandroid.",
    "url": "https://phandroid.com/2023/10/09/googles-pixel-phone-shipments-are-growing-despite-limited-market-availability/",
    "urlToImage": "https://phandroid.com/wp-content/uploads/2023/10/pixel-8-lifestyle-6.jpg",
    "publishedAt": "2023-10-09T09:16:11Z",
    "content": "It has been a while since Google dropped their Nexus branding from its smartphones and shifted it to the Pixel series. Now according to the numbers shared by IDC VP Francisco Jeronimo, it has been es… [+1646 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Presse-citron"
    },
    "author": "Setra",
    "title": "L’iPhone 14 se dévalorise à une vitesse record : explications",
    "description": "Selon une nouvelle étude, l’iPhone 14 perd sa valeur trop vite, pour un appareil Apple.",
    "url": "https://www.presse-citron.net/liphone-14-se-devalorise-a-une-vitesse-record-explications/",
    "urlToImage": "https://www.presse-citron.net/app/uploads/2022/10/iphone-14-plus-vs-14-design.jpg",
    "publishedAt": "2023-10-09T14:30:38Z",
    "content": "Plus un appareil électronique est ancien, plus il perd de la valeur, jusquà ce quil devienne un objet de collection. Cependant, il y a des marques dont les produits se dévalorisent moins vite que dau… [+2995 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Presse-citron"
    },
    "author": "RPB",
    "title": "L’iPhone 15 est-il vraiment moins cher à réparer ? Le verdict de iFixit",
    "description": "Les iPhone 15 sont présentés entre autres par Apple comme \"une révolution\" dans les réparations. Mais sont-ils vraiment si \"amazing\" que cela sur ce plan ? iFixit répond.",
    "url": "https://www.presse-citron.net/liphone-15-est-il-vraiment-moins-cher-a-reparer-le-verdict-de-ifixit/",
    "urlToImage": "https://www.presse-citron.net/app/uploads/2023/10/ifixit-via-youtube.jpg",
    "publishedAt": "2023-10-09T13:00:35Z",
    "content": "Comme chaque année, iFixit a fait partie des premiers à mettre la main sur les iPhone 15 et 15 Pro pour mieux les démontrer et passer leur conception interne au crible. Avec à la clé un score qui don… [+2600 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Presse-citron"
    },
    "author": "Setra",
    "title": "Les ventes de Google Pixel décollent malgré la crise : les chiffres",
    "description": "Google aurait expédié un total de 37,9 millions de smartphones depuis le lancement de sa marque Pixel en 2016. Ces 12 derniers mois, il en aurait expédié 10 millions, et il affiche des croissances à deux chiffres malgré la crise.",
    "url": "https://www.presse-citron.net/les-ventes-de-google-pixel-decollent-malgre-la-crise-les-chiffres/",
    "urlToImage": "https://www.presse-citron.net/app/uploads/2023/05/google-pixel-7a-2.jpg",
    "publishedAt": "2023-10-09T13:45:03Z",
    "content": "À cause de la situation économique actuelle, les ventes de smartphones sont en baisse dans le monde, mais pas chez Google Pixel. Bien au contraire, les expéditions de la marque de Google continuent d… [+3463 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Presse-citron"
    },
    "author": "Presse-citron",
    "title": "Prime Day : oubliez Black Friday, Amazon dégaine 12 deals de FOLIE ",
    "description": "Le Prime Day est un événement plus important que Black Friday pour Amazon. Voici ses meilleures offres.",
    "url": "https://www.presse-citron.net/prime-day-oubliez-black-friday-amazon-degaine-12-deals-de-folie/",
    "urlToImage": "https://www.presse-citron.net/app/uploads/2019/11/black-friday-amazon-80-promotions.jpg",
    "publishedAt": "2023-10-09T05:00:16Z",
    "content": "Le Prime Day est devenu une institution dans le paysage du e-commerce français. Chaque année, à raison de deux fois par an, Amazon dégaine des réductions dans tous les sens pour remercier ses membres… [+5356 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Pitchfork"
    },
    "author": "Pitchfork",
    "title": "Drake, Sleater-Kinney, PinkPantheress, and More: This Week’s Pitchfork Selects Playlist",
    "description": "Our weekly playlist highlights songs that our writers, editors, and contributors are listening to on repeat",
    "url": "https://pitchfork.com/news/drake-sleater-kinney-pinkpantheress-this-week-pitchfork-selects-playlist/",
    "urlToImage": "https://media.pitchfork.com/photos/651f05693cb20b5da52ddec0/16:9/w_1280,c_limit/selects-oct_10-9%20header2.png",
    "publishedAt": "2023-10-09T13:01:58Z",
    "content": "The staff of Pitchfork listens to a lot of new music. A lot of it. On any given day our writers, editors, and contributors go through an imposing number of new releases, giving recommendations to eac… [+850 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "XDA Developers"
    },
    "author": "Asad Khan",
    "title": "Google Pixel Watch 2 vs Samsung Galaxy Watch 6: Which Android smartwatch is the better value?",
    "description": "Let's find out how Google's latest wearable compares against Samsung's flagship watch.",
    "url": "https://www.xda-developers.com/google-pixel-watch-2-vs-samsung-galaxy-watch-6/",
    "urlToImage": "https://static1.xdaimages.com/wordpress/wp-content/uploads/2023/09/google-pixel-watch-2.png",
    "publishedAt": "2023-10-09T19:00:32Z",
    "content": "<ul><li> Google Pixel Watch 2 \r\nThe Pixel Watch 2 builds upon the foundations of the original and gives us better battery life, a more efficient processor, and advanced health-tracking features. Pair… [+15329 chars]"
    }
  
    ]

    constructor(){
      super();
      this.state={
        articles:this.articles,
        loading:false
      }
    }
  render() {
    
    return (

      <div className="container my-3">
       <h2>NewsApp-Top Headlines</h2>
       <div className="row">
        {this.state.articles.map((element)=>{
             return <div className="col-md-4">
             <Newsitem title={element.title.slice(0,45)} description={element.description.slice(0,80)} imageUrl={element.urlToImage} newsUrl={element.url}/>
           </div>
        })}
        
       </div>

      </div>
      
    )
  }
}

export default News
