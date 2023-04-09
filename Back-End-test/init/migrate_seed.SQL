CREATE TABLE IF NOT EXISTS hosts(
    id serial NOT NULL, 
    host_name varchar(30), 
    host_profile_pic varchar(400),
    host_rating int, 
    host_badge varchar(200),
    host_trips int, 
    host_joined_date date,
    host_response_time int,
    host_badge_icon varchar(200),
    host_training_icon varchar(200),
    host_training_description varchar(400),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS cars(
    id serial NOT NULL, 
    car_make varchar(50), 
    car_model varchar(50),
    car_year int, 
    car_name varchar(50),
    car_description varchar(5000),
    car_max_distance int, 
    car_additional_miles_fee int, 
    car_parking_details varchar(1000), 
    car_guidelines varchar(1000),
    car_tolls_fastrak varchar(5000),
    car_tickets varchar(5000),
    host_id int, 
    FOREIGN KEY (host_id) REFERENCES hosts(id),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS features(
    id serial NOT NULL, 
    feature_description varchar(30), 
    feature_icon varchar(200),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS car_features(
    id serial NOT NULL, 
    feature_id int, 
    car_id int,
    PRIMARY KEY (id),
    FOREIGN KEY (car_id) REFERENCES cars(id),
    FOREIGN KEY (feature_id) REFERENCES features(id)
);

CREATE TABLE IF NOT EXISTS photos(
    id serial NOT NULL, 
    photo_locations varchar(300), 
    car_id int, 
    FOREIGN KEY (car_id) REFERENCES cars(id),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS faq(
    id serial NOT NULL, 
    faq_question varchar(300), 
    faq_answer varchar(300), 
    car_id int, 
    FOREIGN KEY (car_id) REFERENCES cars(id),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS users(
    id serial NOT NULL, 
    user_name varchar(30),
    user_password varchar(20), 
    user_email varchar(100),
    user_age int, 
    user_profile_pic varchar(200),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS reviews(
    id serial NOT NULL, 
    review_rating int, 
    review_message varchar(3000),
    review_date date, 
    review_host_response varchar(2000),
    car_id int, 
    user_id int,
    FOREIGN KEY (car_id) REFERENCES cars(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS reports(
    id serial NOT NULL, 
    report_categories varchar(30),
    report_description varchar(300),
    car_id int, 
    user_id int,
    FOREIGN KEY (car_id) REFERENCES cars(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS reservations(
    id serial NOT NULL, 
    reservation_start_date date, 
    reservation_end_date date, 
    reservation_start_time time, 
    reservattion_end_time time, 
    reservation_pick_up_location varchar(100),
    reservation_drop_off_location varchar(100), 
    reservation_cost_per_day int, 
    reservation_protection_plan_fee int, 
    reservation_trip_fee int, 
    reservation_young_driver_fee boolean, 
    reservation_total_cost int, 
    reservation_extras_cost int,
    car_id int, 
    user_id int,
    FOREIGN KEY (car_id) REFERENCES cars(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS extras(
    id serial NOT NULL, 
    extra_number_available int, 
    extra_cost int, 
    extra_description varchar(500),
    extra_name varchar(100),
    car_id int, 
    FOREIGN KEY (car_id) REFERENCES cars(id),
    PRIMARY KEY (id)
);

--------------- Host Seeding -------------
INSERT INTO hosts( 
    host_name, 
    host_profile_pic,
    host_rating, 
    host_badge,
    host_trips, 
    host_joined_date,
    host_response_time,
    host_badge_icon,
    host_training_icon,
    host_training_description
)
   VALUES ('Carima', 'NoPic', 5, 'All-Star Host', 159, '2020-04-01', 35, 'NoPic', 'NoPic','Carima has completed training on enhanced cleaning and disinfection practices.');

--------------- User Seeding --------------
INSERT INTO users(user_name, user_password, user_email, user_age, user_profile_pic)
   VALUES ('Christina', 'password', 'christina.fake@gmail.com', 25, 'No file'); 

INSERT INTO users(user_name, user_password, user_email, user_age, user_profile_pic)
   VALUES ('Sam', 'password' , 'sam.fake@gmail.com', 23, 'turo\Front-End\turo\src\media\profileIcons\SamIcon.PNG');

INSERT INTO users(user_name, user_password, user_email, user_age, user_profile_pic)
   VALUES ('Nelson', 'password' , 'nelson.fake@gmail.com', 28, 'No file');

INSERT INTO users(user_name, user_password, user_email, user_age, user_profile_pic)
   VALUES ('Calvin', 'password' , 'calvin.fake@gmail.com', 30, 'No file');

INSERT INTO users(user_name, user_password, user_email, user_age, user_profile_pic)
   VALUES ('Salma', 'password' , 'salma.fake@gmail.com', 22, 'No file');

INSERT INTO users(user_name, user_password, user_email, user_age, user_profile_pic)
   VALUES ('Carlotta', 'password' , 'carlotta.fake@gmail.com', 25, 'No file');

INSERT INTO users(user_name, user_password, user_email, user_age, user_profile_pic)
   VALUES ('Trevor', 'password' , 'trevor.fake@gmail.com', 27, 'No file');

INSERT INTO users(user_name, user_password, user_email, user_age, user_profile_pic)
   VALUES ('Marcella', 'password' , 'marcella.fake@gmail.com', 25, 'No file');

INSERT INTO users(user_name, user_password, user_email, user_age, user_profile_pic)
   VALUES ('Fionnuala', 'password' , 'fionnuala.fake@gmail.com', 25, 'No file');

INSERT INTO users(user_name, user_password, user_email, user_age, user_profile_pic)
   VALUES ('Anna', 'password' , 'anna.fake@gmail.com', 25, 'No file');

INSERT INTO users(user_name, user_password, user_email, user_age, user_profile_pic)
   VALUES ('Sarah', 'password' , 'sarah.fake@gmail.com', 25, 'No file');

INSERT INTO users(user_name, user_password, user_email, user_age, user_profile_pic)
   VALUES ('Henry', 'password' , 'henry.fake@gmail.com', 25, 'No file');

INSERT INTO users(user_name, user_password, user_email, user_age, user_profile_pic)
   VALUES ('Trevor', 'password' , 'trevor.fake@gmail.com', 25, 'No file');

INSERT INTO users(user_name, user_password, user_email, user_age, user_profile_pic)
   VALUES ('Michelle', 'password' , 'michelle.fake@gmail.com', 25, 'No file');

INSERT INTO users(user_name, user_password, user_email, user_age, user_profile_pic)
   VALUES ('Turo', 'password' , 'turo.fake@gmail.com', 00, 'No file');

INSERT INTO users(user_name, user_password, user_email, user_age, user_profile_pic)
   VALUES ('Steven', 'password' , 'steven.fake@gmail.com', 30, 'No file');

INSERT INTO users(user_name, user_password, user_email, user_age, user_profile_pic)
   VALUES ('Torian', 'password' , 'torian.fake@gmail.com', 28, 'No file');

INSERT INTO users(user_name, user_password, user_email, user_age, user_profile_pic)
   VALUES ('Jason', 'password' , 'jason.fake@gmail.com', 35, 'No file');

INSERT INTO users(user_name, user_password, user_email, user_age, user_profile_pic)
   VALUES ('Isamel', 'password' , 'isamel.fake@gmail.com', 20, 'No file');

INSERT INTO users(user_name, user_password, user_email, user_age, user_profile_pic)
   VALUES ('Samantha', 'password' , 'samantha.fake@gmail.com', 40, 'No file');

INSERT INTO users(user_name, user_password, user_email, user_age, user_profile_pic)
   VALUES ('Marta', 'password' , 'marta.fake@gmail.com', 38, 'No file');

INSERT INTO users(user_name, user_password, user_email, user_age, user_profile_pic)
   VALUES ('Gregg', 'password' , 'turo.fake@gmail.com', 24, 'No file');

INSERT INTO users(user_name, user_password, user_email, user_age, user_profile_pic)
   VALUES ('Andrea', 'password' , 'andrea.fake@gmail.com', 30, 'No file');

INSERT INTO users(user_name, user_password, user_email, user_age, user_profile_pic)
   VALUES ('Phillip', 'password' , 'phillip.fake@gmail.com', 32, 'No file');

INSERT INTO users(user_name, user_password, user_email, user_age, user_profile_pic)
   VALUES ('Justin', 'password' , 'turo.fake@gmail.com', 40, 'No file');

INSERT INTO users(user_name, user_password, user_email, user_age, user_profile_pic)
   VALUES ('Kitty', 'password' , 'kitty.fake@gmail.com', 30, 'No file');

INSERT INTO users(user_name, user_password, user_email, user_age, user_profile_pic)
   VALUES ('Shaween', 'password' , 'shaween.fake@gmail.com', 22, 'No file');

INSERT INTO users(user_name, user_password, user_email, user_age, user_profile_pic)
   VALUES ('Kacie', 'password' , 'kacie.fake@gmail.com', 35, 'No file');

INSERT INTO users(user_name, user_password, user_email, user_age, user_profile_pic)
   VALUES ('Alizabeth', 'password' , 'alizabeth.fake@gmail.com', 30, 'No file');

INSERT INTO users(user_name, user_password, user_email, user_age, user_profile_pic)
   VALUES ('Bryan', 'password' , 'bryan.fake@gmail.com', 40, 'No file');

INSERT INTO users(user_name, user_password, user_email, user_age, user_profile_pic)
   VALUES ('Grant', 'password' , 'grant.fake@gmail.com', 32, 'No file');

INSERT INTO users(user_name, user_password, user_email, user_age, user_profile_pic)
   VALUES ('Ramon', 'password' , 'ramon.fake@gmail.com', 33, 'No file');

INSERT INTO users(user_name, user_password, user_email, user_age, user_profile_pic)
   VALUES ('Joseph', 'password' , 'joseph.fake@gmail.com', 32, 'No file');

INSERT INTO users(user_name, user_password, user_email, user_age, user_profile_pic)
   VALUES ('Ramesh', 'password' , 'ramesh.fake@gmail.com', 31, 'No file');
   
-------------- Car Listing Seeding -------------
INSERT INTO cars(
    car_make, 
    car_model,
    car_year, 
    car_name,
    car_description,
    car_max_distance, 
    car_additional_miles_fee, 
    car_parking_details, 
    car_guidelines,
    car_tolls_fastrak,
    car_tickets,
    host_id)
   VALUES ('Jeep', 
   'Wrangler', 
   2015, 
   'Unlimited Sahara',
   '⏰ 24/7 Delivery and pick up 
        🛩 Airport•Hotel•Residence Delivery
        ⛽️ Delivered on Full
        🧼 Cleaned, Deodorized, & Disinfected 

        ⭐️⭐️⭐️⭐️⭐️ Power Host ⭐️⭐️⭐️⭐️⭐️

        We would love the opportunity to be your Turo Host. 24/7 drop off and pick up airport or home locations  

        We accommodate short and long term rentals, and work seamlessly with agencies to support staff with transportation. 

        Vehicles are cleaned, washed, and disinfected before and after each use. Delivered with a full tank of ⛽️ gas.

        Look no further, this automatic with V6 engine is the ultimate head turner. Perfect for cruising around town or long distance trips, appropriate for winter and summer. Sexy profile, Optional transformer with removable top. Spacious, leather seating, Stylish 18-inch All-Terrain tires. Automatic windows, Ac, heated seats, GPS, and sound system, Appropriate for all events skiing, camping, hiking, cruising the coast, or wine tasting in Napa, just a few examples provided for you, chains available as extra per your request.


        The greatest gift we could give is flexibility, when traveling many situations can arise, we implement Understanding, empathy, patience, and anticipation of changes. Our goal is to provide a seamless experience, where you can focus on creating memories.

        Please note: this car is equipped with a security device that collects driving data. This includes vehicle location, mileage, driving behaviour, and time driven. This information may be shared with third parties for vehicle recovery or insurance purposes.',
    300, 
    .26, 
    'Vehicle will be delivered in-person to curbside of your selected flight for arrivals and departures. In the event we can’t deliver curbside, self check-in will be utilized, vehicle will be parked in airport parking nearest your terminal. Further details will be provided closer to your reservation date.',
    'No pets 🐕
        No off roading 🏔
        Violation fee will be added to your statement',
    'Tolls & Fastrak

        Due to COVID-19 Bridge tolls, are not accepting Cash, Our vehicles are registered with Fastrak, payment is withdrawn from our accounts and you will be billed for tolls during your reservation. Invoices will be populated through Turo, and payment requests.

        Antioch Bridge	$6.00
        Bay Bridge	$5 weekday off peak and $6 weekend
        Benicia – Martinez Bridge	$6.00
        Carquinez Bridge	$6.00
        Dumbarton Bridge	$6.00
        Golden Gate Bridge.                  $8.70 
        Richmond – San Rafael Bridge	$6.00',
        'If you get a ticket, notify your host as soon as possible. Every transportation authority has a different billing cycle, which means your host may not receive the ticket and send you an invoice until several months after your trip ends. That means your host may not receive notice of a ticket until long after your trip has ended. 

        If a host sends you an invoice, we’ll notify you via email and display a notification in your Turo activity feed. You have 48 hours to pay or dispute the invoice. Click on the link in the email or notification or open Trip details for the trip in question to view the invoice. Then tap “Accept and pay” or “Dispute.”  If you’ve booked a trip with a Commercial Host, they’re unable to invoice you for incidental costs via Turo and will contact you directly to resolve any reimbursement issues.',
        1);

----------------- Features Seeding -----------------

INSERT INTO features( feature_description, feature_icon)
   VALUES ('Must be 21+ to book', 'turo\Front-End\turo\src\media\featureIcons\21+.PNG');

INSERT INTO features( feature_description, feature_icon)
   VALUES ('All-wheel drive', 'turo\Front-End\turo\src\media\featureIcons\allWheel.PNG');

INSERT INTO features( feature_description, feature_icon)
   VALUES ('Apple Car Play', 'turo\Front-End\turo\src\media\featureIcons\appleCarPlay.PNG');
   
INSERT INTO features( feature_description, feature_icon)
   VALUES ('Automic transmission', 'turo\Front-End\turo\src\media\featureIcons\automatic.PNG');

INSERT INTO features( feature_description, feature_icon)
   VALUES ('AUX Input', 'turo\Front-End\turo\src\media\featureIcons\auxInput.PNG');

INSERT INTO features( feature_description, feature_icon)
   VALUES ('Bluetooth', 'turo\Front-End\turo\src\media\featureIcons\bluetooth.PNG');

INSERT INTO features( feature_description, feature_icon)
   VALUES ('Convertible', 'turo\Front-End\turo\src\media\featureIcons\convertible.PNG');

INSERT INTO features( feature_description, feature_icon)
   VALUES ('Heated Seats', 'turo\Front-End\turo\src\media\featureIcons\heatedseats.PNG');

INSERT INTO features( feature_description, feature_icon)
   VALUES ('Long-Term-Car', 'turo\Front-End\turo\src\media\featureIcons\longTerm.PNG');

INSERT INTO features( feature_description, feature_icon)
   VALUES ('Sunroof', 'turo\Front-End\turo\src\media\featureIcons\sunroof.PNG');

INSERT INTO features( feature_description, feature_icon)
   VALUES ('USB Charger', 'turo\Front-End\turo\src\media\featureIcons\usbCharger.PNG');

INSERT INTO features( feature_description, feature_icon)
   VALUES ('Leather Seats', 'turo\Front-End\turo\src\media\featureIcons\generic.PNG');

INSERT INTO features( feature_description, feature_icon)
   VALUES ('Backup Camera', 'turo\Front-End\turo\src\media\featureIcons\allWheel.PNG');

INSERT INTO features( feature_description, feature_icon)
   VALUES ('Child Seat', 'turo\Front-End\turo\src\media\featureIcons\allWheel.PNG');

INSERT INTO features( feature_description, feature_icon)
   VALUES ('GPS', 'turo\Front-End\turo\src\media\featureIcons\allWheel.PNG');

INSERT INTO features( feature_description, feature_icon)
   VALUES ('Keyless Entry', 'turo\Front-End\turo\src\media\featureIcons\allWheel.PNG');

INSERT INTO features( feature_description, feature_icon)
   VALUES ('Snow tires or chains', 'turo\Front-End\turo\src\media\featureIcons\allWheel.PNG');

INSERT INTO features( feature_description, feature_icon)
   VALUES ('Toll Pass', 'turo\Front-End\turo\src\media\featureIcons\allWheel.PNG');

INSERT INTO features( feature_description, feature_icon)
   VALUES ('USB Input', 'turo\Front-End\turo\src\media\featureIcons\allWheel.PNG');

INSERT INTO features( feature_description, feature_icon)
   VALUES ('Fastrak', 'turo\Front-End\turo\src\media\featureIcons\allWheel.PNG');

----------------- Car Features Seeding -----------------

INSERT INTO car_features( feature_id, car_id)
   VALUES (1 , 1);

INSERT INTO car_features( feature_id, car_id)
   VALUES (2 , 1);

INSERT INTO car_features( feature_id, car_id)
   VALUES (3 , 1);

INSERT INTO car_features( feature_id, car_id)
   VALUES (4 , 1);

INSERT INTO car_features( feature_id, car_id)
   VALUES (5 , 1);

INSERT INTO car_features( feature_id, car_id)
   VALUES (6 , 1);

INSERT INTO car_features( feature_id, car_id)
   VALUES (7 , 1);

INSERT INTO car_features( feature_id, car_id)
   VALUES (8 , 1);

INSERT INTO car_features( feature_id, car_id)
   VALUES (9 , 1);

INSERT INTO car_features( feature_id, car_id)
   VALUES (10 , 1);

INSERT INTO car_features( feature_id, car_id)
   VALUES (11 , 1);

INSERT INTO car_features( feature_id, car_id)
   VALUES (12 , 1);

INSERT INTO car_features( feature_id, car_id)
   VALUES (13 , 1);

INSERT INTO car_features( feature_id, car_id)
   VALUES (14 , 1);

INSERT INTO car_features( feature_id, car_id)
   VALUES (15 , 1);

INSERT INTO car_features( feature_id, car_id)
   VALUES (16 , 1);

INSERT INTO car_features( feature_id, car_id)
   VALUES (17 , 1);

INSERT INTO car_features( feature_id, car_id)
   VALUES (18 , 1);

INSERT INTO car_features( feature_id, car_id)
   VALUES (19 , 1);


----------------- Extras Seeding -----------------

INSERT INTO extras(extra_number_available, extra_cost, extra_description, extra_name, car_id)
   VALUES (0, 50, 'Driver and passenger roof panels.', 'Camper shell', 1);

INSERT INTO extras(extra_number_available, extra_cost, extra_description, extra_name, car_id)
   VALUES (0, 125, 'Removal of roof, only for trips 2 days or less.', 'Camper shell', 1);

INSERT INTO extras(extra_number_available, extra_cost, extra_description, extra_name, car_id)
   VALUES (1, 50, 'WiFi Connectivity  • In-car productivity & entertainment with Wi-Fi hotspot for up to 5 devices', 'Portable WiFi hotspot', 1);

INSERT INTO extras(extra_number_available, extra_cost, extra_description, extra_name, car_id)
   VALUES (1, 50, 'Car seat available, please provide age of child.', 'Child Safety Seat', 1);

INSERT INTO extras(extra_number_available, extra_cost, extra_description, extra_name, car_id)
   VALUES (0, 100, 'Save time, make drop-off a breeze, and avoid additional fees by adding this Extra, which allows you to return my car at any fuel level. Price includes up to a full tank of gas.', 'Prepaid refuel', 1);

INSERT INTO extras(extra_number_available, extra_cost, extra_description, extra_name, car_id)
   VALUES (1, 10, 'Cooler, per your request ', 'Cooler', 1);

   ----------------- Review Seeding -----------------

INSERT INTO reviews(review_rating, review_message, review_date, review_host_response, car_id, user_id)
   VALUES (5, 'This was our first time using Turo but definitely won’t be our last! I just hope every experience is as great as this one. Carima greeted us at the airport terminal when we arrived and met us at the terminal when we were flying out. It absolutely could not have been any easier. The Jeep was in perfect condition and a lot of fun! 5 stars is not enough for this experience!', '2023-04-01', NULL, 1, 1);

INSERT INTO reviews(review_rating, review_message, review_date, review_host_response, car_id, user_id)
   VALUES (5, 'Thank you and it was great to meet you', '2023-03-21', 'It was a joy to Host you', 1, 2);

INSERT INTO reviews(review_rating, review_message, review_date, review_host_response, car_id, user_id)
   VALUES (5, 'Extremely friendly, very nice looking jeep! Super clean and comfortable too!', '2023-02-27', NULL, 1, 3);

INSERT INTO reviews(review_rating, review_message, review_date, review_host_response, car_id, user_id)
   VALUES (5, 'Extremely convenient curbside pick-up and drop-up at the airport, warmly greeted by Carima after a long flight. The Jeep is also a joy to drive too.', '2023-01-10', NULL, 1, 4);

INSERT INTO reviews(review_rating, review_message, review_date, review_host_response, car_id, user_id)
   VALUES (5, 'Carima’s car was very clean and comfortable to drive for my California roadtrip. Communication with Carima was seamless and she has been an excellent and helpful host. I 100% recommend her!', '2022-10-20', 'Thank you so much, it was a joy to provide your transportation needs, I hope your birthday was memorable.', 1, 5);

INSERT INTO reviews(review_rating, review_message, review_date, review_host_response, car_id, user_id)
   VALUES (5, 'Great car, great host!! Thanks Carima & Paul!!', '2022-10-27', 'Communication was awesome, conversation, and the kindness you give is breathtaking. Vehicle returned in the outstanding condition, it was a pleasure to provide your transportation needs', 1, 6);

INSERT INTO reviews(review_rating, review_message, review_date, review_host_response, car_id, user_id)
   VALUES (5, 'Rent this car from Carima ASAP! She is the best host ever…felt like we just borrowed our friends car…comfortable, easy, perfect communication, extremely clean car, and just overall extraordinary service! Carima, you are wonderful, thank you so much!', '2022-09-05', 'Thank you for your kind words, we strive to provide exceptional service, so you can focus on creating memories xoxoxox You’re to kind', 1, 7);

INSERT INTO reviews(review_rating, review_message, review_date, review_host_response, car_id, user_id)
   VALUES (5, 'Carima made this rental incredible easy. It was my first rental on Turo and because of her it was a great one! The Jeep I rented was clean and in great shape. It did well on the road too! Bonus: Carima kept the communication open during my rental period; making sure everything was well. I will definitely be renting from her again!', '2022-08-21', 'It was a absolute pleasure to have met you both, and provide your first Turo rental experience. We truly appreciate your energy and meaningful conversation. If I could give you a 10 I would wishing you nothing but success with your future travels and business ventures, I’m overly excited for you, reach for the stars Carima and Paul', 1, 8);

INSERT INTO reviews(review_rating, review_message, review_date, review_host_response, car_id, user_id)
   VALUES (5, 'What a great experience! Thank you Carima for the warm welcome to the beautiful west coast! The process was seamless and set the tone for the rest of our trip. Thank you, thank you, thank you !!!', '2022-08-17', 'I had the pleasure to host Fionnuala and her two beautiful friends, they are such amazing individuals with awesome personalities. Wonderful energy, great communication, empathetic, and kind. I will always be available to assist you in anyway, until next time. Carima', 1, 9);

INSERT INTO reviews(review_rating, review_message, review_date, review_host_response, car_id, user_id)
   VALUES (5, 'The car was amazing, totally spotless, and so much fun to drive. Carmina made the pickup and drop off process completely seamless and couldn’t have been easier.', '2022-08-03', NULL, 1, 10);

INSERT INTO reviews(review_rating, review_message, review_date, review_host_response, car_id, user_id)
   VALUES (5, 'Since this was my first trip using Turo, I was a little nervous how it would go. Carima made it so easy! She was easy to talk to, answered all of our questions, and even adjusted the drop off location to better serve us since we had plans that were going to run a little later than initially planned. We will definitely use Turo again, but if we are ever in San Francisco again, we will definitely go through Carima!', '2022-07-28', 'The greatest gift we could give is flexibility, when traveling many situations can arise, we implement Understanding, empathy, patience, and anticipation of changes. Our goal is to provide a seamless experience, where you can focus on creating memories. Sarah, it was a joy to have met you, and your fantastic family, safe travels and we’re always at your service when in California. Warm regards', 1, 11);

INSERT INTO reviews(review_rating, review_message, review_date, review_host_response, car_id, user_id)
   VALUES (5, 'Carima is a delight and so easy to work with. Very smooth process at pickup and drop off. Wonderful!', '2022-07-17', NULL, 1, 12);

INSERT INTO reviews(review_rating, review_message, review_date, review_host_response, car_id, user_id)
   VALUES (5, 'Carima was absolutely fantastic! Pickup was a breeze at baggage claim at Oakland International! We dropped off a couple hours earlier than expected and Carima was totally understanding! Would recommend Carima to everyone!', '2022-06-13', NULL, 1, 13);

INSERT INTO reviews(review_rating, review_message, review_date, review_host_response, car_id, user_id)
   VALUES (5, 'Carima was a great host and the Jeep was perfect for our trip!', '2022-06-09', NULL, 1, 14);

INSERT INTO reviews(review_rating, review_message, review_date, review_host_response, car_id, user_id)
   VALUES (5, 'The host cancelled this trip 56 minutes before it started. This message was automatically posted by Turo.', '2022-06-02', NULL, 1, 15);

INSERT INTO reviews(review_rating, review_message, review_date, review_host_response, car_id, user_id)
   VALUES (5, 'Great trip—the Jeep was well kept and very fun on our trip up the California/Oregon coast. Carima was warm and very thoughtful. Looking forward to renting from Carima for my next trip :)', '2022-05-21', NULL, 1, 16);

INSERT INTO reviews(review_rating, review_message, review_date, review_host_response, car_id, user_id)
   VALUES (5, 'I WANT TO BOOK AGAIN ALREADY! Carima and Paul were phenomenal host! Great communication! Waited on us at pick up and drop off! LOVE their jeep! Can’t wait to book with them again 🥂', '2022-05-03', 'It was awesome to HOST a HOST! We’ll definitely rent your vehicle’s when we visit Atlanta. We appreciated everyone’s energy, entrepreneurial mindset/lifestyle, communication, and promptness with time, safe travel’s ✈️ blessings always til we meet again. Paul and Carima', 1, 17);  

INSERT INTO reviews(review_rating, review_message, review_date, review_host_response, car_id, user_id)
   VALUES (5, 'Carima and her husband are great hosts. They took a lot of time to teach me how to use the removable roof', '2022-04-04', NULL, 1, 18);

INSERT INTO reviews(review_rating, review_message, review_date, review_host_response, car_id, user_id)
   VALUES (5, 'Excellent!!!! Our trip was amazing, Carima and Paul were absolutely amazing. Thanks', '2022-03-25', NULL, 1, 19);

INSERT INTO reviews(review_rating, review_message, review_date, review_host_response, car_id, user_id)
   VALUES (5, 'Absolutely amazing! Carima and Paul were so accommodating. The Jeep was clean, smelled amazing, and mechanically sound. Everything was so smooth, and Carima is the SWEETEST person. 10/10 recommend. I cannot say enough great things.', '2022-02-22', NULL, 1, 20);

INSERT INTO reviews(review_rating, review_message, review_date, review_host_response, car_id, user_id)
   VALUES (5, 'Carima and Paul are excellent hosts. Thoughtful (a care package with essentials for traveling these days), prompt, professional but warm. The jeep was a joy to drive! I’ve thought of buying one in the past but opted for a pickup… after driving theirs I’m seriously considering one again. Thank you Carima and Paul!', '2022-02-15', NULL, 1, 21);

INSERT INTO reviews(review_rating, review_message, review_date, review_host_response, car_id, user_id)
   VALUES (5, 'The Jeep was Great and very clean when we picked it up. Also Carima was very pleasant and thoughtful. Will rent from them again.', '2021-12-28', 'It was such a joy to meet you both, I hope your trip was epic and memorable, we enjoyed your great conversation, awesome communication, keep creating memories always, Carima and Paul', 1, 22); 

INSERT INTO reviews(review_rating, review_message, review_date, review_host_response, car_id, user_id)
   VALUES (5, 'The car was clean and sanitized, she has great communication and she was beyond accommodating we had the car 43 days as we waited for our new car to come in.', '2021-12-18', 'Aww 🥰 thank you so much, it was a absolute joy to have met you. Hope we run into each other around town xoxoxox happy holidays Carima', 1, 23);

INSERT INTO reviews(review_rating, review_message, review_date, review_host_response, car_id, user_id)
   VALUES (5, 'Carima and Paul were very communicative and helpful. I changed my trip plans mid-trip and they were ok with it. And the jeep was very clean and ran great. This was a great rental!', '2021-10-23', NULL, 1, 24);

INSERT INTO reviews(review_rating, review_message, review_date, review_host_response, car_id, user_id)
   VALUES (5, 'Fun car and nice people', '2021-10-04', 'Thank you, it was a pleasure to host you and your father.', 1, 25);

INSERT INTO reviews(review_rating, review_message, review_date, review_host_response, car_id, user_id)
   VALUES (5, 'Carima, was the greatest! Responded quickly to all my questions and was very helpful for whatever I needed to make my 8yr wedding anniversary the best weekend.. I highly recommend her with out a doubt l. Thank you again so much Carima.', '2021-09-19', 'Awwww, it was a absolute pleasure to host you, thanks again, for great conversation with your family and being prompt with time, we truly appreciate you', 1, 26);

INSERT INTO reviews(review_rating, review_message, review_date, review_host_response, car_id, user_id)
   VALUES (5, 'Carima was such a gracious host; she was so kind and her car was SO FUN!!', '2021-09-05', 'Awwww 🥰 i appreciate you ❤️', 1, 27);

INSERT INTO reviews(review_rating, review_message, review_date, review_host_response, car_id, user_id)
   VALUES (5, 'Super easy to use Carmina’s Jeep from SFO! Clean car, great communication. Will rent again.', '2021-09-04', NULL, 1, 28);

INSERT INTO reviews(review_rating, review_message, review_date, review_host_response, car_id, user_id)
   VALUES (5, 'First time using the app and Carima was everything GREAT! On time, communication was great and absolutely the best!', '2021-08-23', '🥰 I truly appreciate you, you’re awesome 🤩', 1, 29);

INSERT INTO reviews(review_rating, review_message, review_date, review_host_response, car_id, user_id)
   VALUES (5, 'Carima is an exceptional host. She goes above and beyond to make sure that the customer has a good experience. Communication with her is always pleasant and prompt. The Jeep was super clean and a pleasure to drive. Next time I visit the Bay area she will be my first stop for a vehicle! Thanks Carima!', '2021-08-19', NULL, 1, 30);

INSERT INTO reviews(review_rating, review_message, review_date, review_host_response, car_id, user_id)
   VALUES (5, 'Car was perfect and communication was super easy throughout.', '2021-08-08', NULL, 1, 31);

INSERT INTO reviews(review_rating, review_message, review_date, review_host_response, car_id, user_id)
   VALUES (5, 'The host cancelled this trip 14 hours before it started. This message was automatically posted by Turo.', '2021-07-30', NULL, 1, 15);

INSERT INTO reviews(review_rating, review_message, review_date, review_host_response, car_id, user_id)
   VALUES (5, 'This was my first time using Turo wow what a great experience so easy and convenient', '2021-07-18', 'We’re glad, you had a awesome experience. It was a absolute pleasure providing your transportation needs. Hope to be a future host to you.', 1, 32);

INSERT INTO reviews(review_rating, review_message, review_date, review_host_response, car_id, user_id)
   VALUES (5, 'The Jeep is amazing!! Perfect amount of room for the family and luggage. We enjoyed driving up the San Francisco & Oakland Hills. Communication with Carima was a breeze, and she answered all questions about the area quickly and with a sense of urgency. A true professional, but she also felt like a friend. The Jeep was clean, well maintained, and surprisingly great with gas mileage! Thank you so much! I’d recommend renting from Carima to my friends and family in a heartbeat, and will be requesting for her Jeep when we’re back in town!', '2021-07-14', 'Thank you, so much. It was a absolute joy, hosting you and your family, i appreciate, your feedback on our welcome kits, your awesome communication, and prompt timing for retrieving and returning your vehicle curbside. Thank you, for the auxiliar cord, safe travels and hope to host you again in the future, warm regards Carima', 1, 33);

INSERT INTO reviews(review_rating, review_message, review_date, review_host_response, car_id, user_id)
   VALUES (5, 'Excellent vehicle, service, met very nice couple .. looking forward to renting with them again..', '2021-07-07', 'Ramesh, and his family, are extremely kind and considerate. Communication, was amazing. It was a pleasure to provide them with transportation', 1, 34);


