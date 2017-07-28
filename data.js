var data = {};

data.startMoney = 2000;
data.moneyGoal = 4000;
data.upkeep = 20;

var exampleLoan = 
{
	name: "Example Guy",
	amount: 20,
	reason: "I need to buy some pizza. I'll pay you back brah, I promise.",
	failReason: "Turns out surfer dudes don't pay back for pizza.",
	successReason: "Brah's a brah, right?",
	rate: 0.1,
	chance: 0.3
};

data.loans = 
[/*
	{
	name: "Bob the Ice Salesman",
	amount: 200,
	reason: "My ice business has been booming in Florida, and I had a thought: sell ice to eskimos!",
	failReason: "It turned out the eskimos had enough ice of their own.",
	successReason: "Bob's salesman skills are true to the saying, and business is booming.",
	rate: 0.5,
	chance: 0.3
	},
	{
	name: "Dave the Poodle Groomer",
	amount: 500,
	reason: "So I groom poodles. But I had an idea: skydiving WITH your poodle. Genius, right?",
	failReason: "It turns out not surviving a skydive is bad publicity with gimmicks.",
	successReason: "Dave's furry friends skydiving maintains sky-high demand.",
	rate: 0.4,
	chance: 0.6
	},
	{
	name: "Noodle Guy",
	amount: 100,
	reason: "I want to open a noodle store. WITH PANDAS. Yes, yes, yes.",
	failReason: "Turns out pandas also like noodles. They ate all the stock.",
	successReason: "Guess people like pandas.",
	rate: 0.3,
	chance: 0.6
	},
	{
	name: "Totally Legit Company",
	amount: 20000,
	reason: "We are going to manufacture... things. Give us money.",
	failReason: "Not very legit in my opinion.",
	successReason: "If you get this message the game broke.",
	rate: 2,
	chance: -5
	},
	{
	name: "Santa",
	amount: 1000,
	reason: "Turns out, there are a lot of kids, and money is a bit tight. Help me out?",
	failReason: "Turns out you bankrolled Santa's cookie addiction.",
	successReason: "Where did Santa get money? Who knows, it is a Christmas miracle!",
	rate: 0.5,
	chance: 0.6
	},
	{
	name: "Pet Monkey LLC",
	amount: 500,
	reason: "We sell people monkeys, basically. But it turns out you need to buy some first.",
	failReason: "Apparently buying monkeys is... shall we say, not quite legal.",
	successReason: "Monkeys, monkeys, everywhere... something something. Money!",
	rate: 0.3,
	chance: 0.4
	},
	{
	name: "Cat Carl",
	amount: 2000,
	reason: "You know haunted mansions? I am going to make one, but with cats!",
	failReason: "Apparently the cats were a bit too scary.",
	successReason: "I'm pretty scared of cats myself. Makes sense.",
	rate: 0.3,
	chance: 0.5
	},
	{
	name: "Pizza Jon",
	amount: 20,
	reason: "I am hungry. I'll buy next time, I promise!",
	failReason: "Write it off as charitable donations?",
	successReason: "Pizza and keeping the doors open another day, huzzah!",
	rate: 1,
	chance: 0.5
	},*/
	{
	name: "First Loan LLC",
	amount: 200,
	reason: "Hey! We heard you are in the loan business. We, uh, need a loan. Yeah, that.",
	failReason: "Not the best way to start loaning, I will say.",
	successReason: "Aw, you made money on your first loan, how cute.",
	rate: 0.2,
	chance: 0.7
	},
	{
	name: "Pete",
	amount: 300,
	reason: "Hey there. I, uh... broke my front door. Guess that spider showed me, huh? Don't ask. Anyway, it is an eyesore, it really is, and I need to get it fixed.",
	failReason: "Least you got a good story for your money.",
	successReason: "True to his word, Pete came through. Though that spider is probably still hanging around...",
	rate: 0.1,
	chance: 0.9
	},
	{
	name: "Uncle Danny",
	amount: 1000,
	reason: "Hey, sonny. Remember that time you had noodles on your face? You looked like an idiot. Anyway, turns out not having a job is expensive. Help your uncle out, will ya?",
	failReason: "Typical Uncle Danny.",
	successReason: "Who would have thought Uncle Danny could hold a job?",
	rate: 10.48,
	chance: 0.2
	},
	{
	name: "Fluorescent Fish Company",
	amount: 900,
	reason: "We got fish. Glowing fish. Well, actually, we don't, YET. We need a bit more for R&D. But marketing research shows kids everywhere (also cats) love glowing fish.",
	failReason: "Apparently nobody knows how to make glowing fish.",
	successReason: "Glowing fish are spreading across the nation. And, allegedly, in native ponds destroying indigenous wildlife. But hey, you made money.",
	rate: 0.4,
	chance: 0.4
	},
	{
	name: "Pet Brick Company",
	amount: 300,
	reason: "Like pet rocks, but better!",
	failReason: "Turns out it wasn't like pet rocks.",
	successReason: "People will buy anything...",
	rate: 0.5,
	chance: 0.2
	},
	{
	name: "Build-A-Chair-Company",
	amount: 10,
	reason: "We don't even use our own chairs! Our low quality allows your $10 to go far!",
	failReason: "$10 isn't bad for a good life lesson eh?",
	successReason: "I am told an employee of the company went off to Mexico to start their own chair company.",
	rate: 1,
	chance: 0.1
	},
	{
	name: "Treasure Exploration Company",
	amount: 500,
	reason: "If we find something, it will be worth your while.",
	failReason: "You know what your share of the treasure is? Nothing, because there is none.",
	successReason: "Treasure, yay.",
	rate: 1,
	chance: 0.1
	},
	{
	name: "Hollister & Way",
	amount: 900,
	reason: "Successfully suing people you don't like since 1980! We have expanded to 6 cities so far, but we want to go faster.",
	failReason: "After Hollister sued Way the business fell apart.",
	successReason: "Turns out people like to sue people.",
	rate: 0.2,
	chance: 0.95
	},
	{
	name: "Alchemedic Offerings",
	amount: 500,
	reason: "Ever wanted to turn your bathtub to gold? Of course you have! We just need some funding for R&D to make it happen. After that we can easily pay you back.",
	failReason: "Guess you have to paint your bathtub gold.",
	successReason: "If you get this message the game is broken.",
	rate: 2,
	chance: -5
	},
	{
	name: "Bob's Bacon Euphorium",
	amount: 1000,
	reason: "Bob's Bacon Euphorium has been loved by fans since its inception in 2001. The line extends down the block every weekday. It is time to expand, fast.",
	failReason: "Unfortunately Bob's Bacon Euphorium was mostly popular due to its single location, and it didn't scale.",
	successReason: "You could build a castle with all that bacon. Then be Count Bacon!",
	rate: 0.2,
	chance: 0.95
	},
	{
	name: "Blake the Singer",
	amount: 300,
	reason: "I am the best singer in the world! Well, I will be, once I am discovered. Until then, somebody has to pay the bills. Do I look like a guy that pays bills?",
	failReason: "Blake discovered a new career: surfing.",
	successReason: "Blake made it big, and is touring Australia to promote his new album, \"Pancakes in Australia\"",
	rate: 0.2,
	chance: 0.95
	},
	{
	name: "Pet Vending Co",
	amount: 600,
	reason: "We made a vending machine, for, uh, animals. Very popular in Japan! Now we want to expand to the US.",
	failReason: "Apparently vending machines for pets are \"inhumane.\"",
	successReason: "People buy strange things from vending machines.",
	rate: 0.6,
	chance: 0.2
	},
	{
	name: "Santa",
	amount: 120,
	reason: "Rudolf broke down AGAIN. But the kids need their toys, y'know?",
	failReason: "Apparently the kids need their toys, but you don't need your money.",
	successReason: "You saved Christmas, yada yada yada... and made money!",
	rate: 0.3,
	chance: 0.8
	},
	{
	name: "Shady Company",
	amount: 500,
	reason: "We make umbrellas and stuff.",
	failReason: "Shady in more ways than one.",
	successReason: "I guess you can use an umbrella now because IT'S RAINING MONEY.",
	rate: 0.7,
	chance: 0.2
	},
	{
	name: "BuyStuff Reality",
	amount: 1500,
	reason: "We heard rumors Disney was making another theme park. We want to buy up land there and make a huge profit.",
	failReason: "Disney built elsewhere, and the investment is worthless.",
	successReason: "Where Mickey goes, money follows.",
	rate: 0.7,
	chance: 0.4
	},
	{
	name: "Bob from across the street",
	amount: 50,
	reason: "I may have run over a mailbox with my car. How was I supposed to know it was there?",
	failReason: "The mailbox wasn't the only thing they ran over.",
	successReason: "Sometimes it takes the death of a mailbox to make money, you know?",
	rate: 1,
	chance: 0.2
	},
	{
	name: "Big TV's Co",
	amount: 2000,
	reason: "Apparently people are liking bigger and bigger TV's. Like, BIG TV's. That is where we come in. But we got to make them first.",
	failReason: "After the first tip-over fatality, sales dropped sharply.",
	successReason: "People get big TV's, and you get big money. Perhaps you can get a big TV with it.",
	rate: 0.6,
	chance: 0.3
	},
	{
	name: "Joke Guy",
	amount: 500,
	reason: "They call me Joke Guy. More like wierd fry, amiright? Anywhoostle, the government didn't find it very funny when I didn't pay my taxes, you see... so I need some help quick.",
	failReason: "Want to hear a joke? There was a banker. He lost money. Ha-ha-ha.",
	successReason: "So this joke guy walks into a bank... and gets a loan. Ahahaha!",
	rate: 0.7,
	chance: 0.5
	},
	{
	name: "BuyStuff Co",
	amount: 3000,
	reason: "Want toilets? We got those! Want money? We don't got that, yet. But we will, once we expand.",
	failReason: "I hope they sell \"I'm with stupid\" shirts.",
	successReason: "People are buying stuff from BuyStuff everywhere. Though they discontinued the toilet line after the Incident.",
	rate: 0.2,
	chance: 0.7
	},
	{
	name: "Space Inc.",
	amount: 5000,
	reason: "We wanted to start a company to fly people to space, for a bit. Everybody wants to try space! But building stuff is expensive...",
	failReason: "Space travel is tough, kid. After the crash nobody wanted to try it.",
	successReason: "It costs your arm and two cats, but rich people like space.",
	rate: 0.4,
	chance: 0.7
	},
	{
	name: "The Federal Government",
	amount: 50000,
	reason: "So it turns out it costs money to run welfare. Who knew? Problem is, if we raise taxes, people get mad. But we still got to pay them. So we will borrow some money from you to give to them. We will pay you back later.",
	failReason: "You had enough money to loan to the government. I am not even mad, that is impressive.",
	successReason: "Free money courtesy of good ole' Uncle Sam.",
	rate: 0.15,
	chance: 1
	}
];