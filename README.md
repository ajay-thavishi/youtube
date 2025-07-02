# Debouncer

-   With the debouncer technique, we cam achieve the performance
-   e.g: iphone pro max
-   If we call api, on every key press, then it will call 14 times. 1000 people are searching same time then 1000 \* 14 => 14000 api calls
-   If we call api, >200ms of time between two key press, then we can reduce api call to 3 times. 3\*1000 = 3000 api calls

## Debouncing with 200ms

-   If difference between 2 key strokes is < 200ms, decline an api call
-   > 200ms makes an api call

# Caching

-   time complexity to search in array = O(n)
    [i, ip, iph, ipho, iphon, iphone ]

-   time complexity to search in object = O(1)
    {
    i:
    ip:
    iph:
    ipho:
    iphon:
    iphone:
    }

-   LRU(Least Recently Used) Caching is recommended way for caching the data. It's a caching algorithm that pritorizes data that has been accessed most recently, meaning that when a cache is full, the item that has been unused for the longest time is removed to make the space for new data.

Live chat >>>>>>> infinite scroll >>>>> pagination

# Challenges of Live Chat

-   Data Layer - Getting Live data from Server
    -   To solve the Data Layer problem, We have 2 options, Web Sockket and API Poilling
        -   Web Socket - It is a communitcation protocal that provides communication between client(browser) and server over a single TCP connection.
        -   e.g: Trading apps(Upstox, Zerodha), whatsapp
        -   API Polling - It is the process of repeatedly making http requests to a server at regular intervals to check for new data or changes.
        -   e.g: gmail, cricbuzz
-   UI Layer - Update the UI
    -   To solve the UI layer problem, we can remove old chats after a certain time to make the space for new chats
