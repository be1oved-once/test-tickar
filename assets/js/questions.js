let db = null;
let updateDoc, doc, arrayUnion;

try {
  const fb = await import("./firebase.js");
  db = fb.db;

  const fs = await import("https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js");
  updateDoc = fs.updateDoc;
  doc = fs.doc;
  arrayUnion = fs.arrayUnion;
} catch (e) {
  console.warn("Firebase not ready, bookmarks disabled");
}

export async function saveBookmark(uid, questionId) {
  await updateDoc(doc(db, "users", uid), {
    bookmarks: arrayUnion(questionId)
  });
}
export const subjects = [
  {
    id: "eco",
    name: "Economics",
    chapters: [
      {
        id: "eco_ch1",
        name: "Nature and Scope of Business Economics",
        questions: [
          {
            text: "Economists regard decision making as important because",
            options: [
              "The resources required to satisfy our unlimited wants and needs are finite, or scarce",
              "It is crucial to understand how we can best allocate our scarce resources to satisfy society’s unlimited wants and needs.",
              "Resources have alternative uses.",
              "All the above."
            ],
            correctIndex: 3
          },
          {
            text: "Business Economics is",
            options: [
              "Abstract and applies the tools of Microeconomics.",
              "Involves practical application of economic theory in business decision making",
              "Incorporates tools from multiple disciplines.",
              "b and c above."
            ],
            correctIndex: 3
          },
          {
            text: "In Economics, we use the term scarcity to mean",
            options: [
              "Absolute scarcity and lack of resources in less developed countries.",
              "Relative scarcity i.e. scarcity in relation to the wants of the society.",
              "Scarcity during times of business failure and natural calamities.",
              "Scarcity caused on account of excessive consumption by the rich."
            ],
            correctIndex: 1
          },
          {
            text: "What implications does resource scarcity have for the satisfaction of wants?",
            options: [
              "Not all wants can be satisfied.",
              "We will never be faced with the need to make choices.",
              "We must develop ways to decrease our individual wants.",
              "The discovery of new natural resources is necessary to increase our ability to satisfy wants."
            ],
            correctIndex: 0
          },
          {
            text: "Which of the following is a normative statement?",
            options: [
              "Planned economies allocate resources via government departments.",
              "Most transitional economies have experienced problems of falling output and rising prices over the past decade.",
              "There is a greater degree of consumer sovereignty in market economies than planned economies.",
              "Reducing inequality should be a major priority for mixed economies."
            ],
            correctIndex: 3
          },
          {
            text: "In every economic system, scarcity imposes limitations on",
            options: [
              "Households, business firms, governments, and the nation as a whole.",
              "Households and business firms, but not the governments.",
              "Local and state governments, but not the federal government.",
              "Households and governments, but not business firms."
            ],
            correctIndex: 0
          },
          {
            text: "Macroeconomics is also called ______ economics.",
            options: [
              "Applied",
              "Aggregate",
              "Experimental",
              "None of the above"
            ],
            correctIndex: 1
          },
          {
            text: "An example of positive economic analysis would be",
            options: [
              "An analysis of the relationship between the price of food and the quantity purchased.",
              "Determining how much income each person should be guaranteed.",
              "Determining the fair price for food.",
              "Deciding how to distribute the output of the economy."
            ],
            correctIndex: 0
          },
          {
            text: "A study of how increases in the corporate income tax rate will affect the national unemployment rate is an example of",
            options: [
              "Macro-Economics",
              "Descriptive Economics.",
              "Micro-economics.",
              "Normative economics."
            ],
            correctIndex: 0
          },
          {
            text: "Which of the following does not suggest a macro approach for India?",
            options: [
              "Determining the GNP of India.",
              "Finding the causes of failure of ABC Ltd.",
              "Identifying the causes of inflation in India.",
              "Analyze the causes of failure of industry in providing large scale employment."
            ],
            correctIndex: 1
          },
          {
            text: "Ram: “My corn harvest this year is poor.” Krishan: “Don’t worry. Price increases will compensate for the fall in quantity supplied.” Vinod: “Climate affects crop yields. Some years are bad, others are good.” Madhu: “The Government ought to guarantee that our income will not fall.” In this conversation, the normative statement is made by",
            options: [
              "Ram",
              "Krishan",
              "Vinod",
              "Madhu"
            ],
            correctIndex: 3
          },
          {
            text: "Consider the following and decide which, if any, economy is without scarcity",
            options: [
              "The pre-independent Indian economy, where most people were farmers.",
              "A mythical economy where everybody is a billionaire.",
              "Any economy where income is distributed equally among its people.",
              "None of the above."
            ],
            correctIndex: 3
          },
          {
            text: "Which of the following is not a subject matter of Micro-economics?",
            options: [
              "The price of mangoes.",
              "The cost of producing a fire truck for the fire department of Delhi, India.",
              "The quantity of mangoes produced for the mangoes market.",
              "The national economy’s annual rate of growth."
            ],
            correctIndex: 3
          },
          {
            text: "The branch of economic theory that deals with the problem of allocation of resources is",
            options: [
              "Micro-Economic theory.",
              "Macro-economic theory.",
              "Econometrics.",
              "None of the above."
            ],
            correctIndex: 0
          },
          {
            text: "Which of the following is not the subject matter of Business Economics?",
            options: [
              "Should our firm be in this business?",
              "How much should be produced and at what price should be kept?",
              "How will the product be placed in the market?",
              "How should we decrease unemployment in the economy?"
            ],
            correctIndex: 3
          },
          {
            text: "Which of the following is a normative economic statement?",
            options: [
              "Unemployment rate decreases with industrialization.",
              "Economics is a social science that studies human behaviour.",
              "The minimum wage should be raised to Rs. 200 per day.",
              "India spends a huge amount of money on national defense."
            ],
            correctIndex: 2
          },
          {
            text: "Which of the following would be considered a topic of study in Macroeconomics?",
            options: [
              "The effect of increase in wages on the profitability of cotton industry.",
              "The effect on steel prices when more steel is imported.",
              "The effect of an increasing inflation rate on living standards of people in India.",
              "The effect of an increase in the price of coffee on the quantity of tea consumed."
            ],
            correctIndex: 2
          },
          {
            text: "The difference between positive and normative Economics is",
            options: [
              "Positive Economics explains the performance of the economy while normative Economics finds out the reasons for poor performance.",
              "Positive Economics describes the facts of the economy while normative Economics involves evaluating whether some of these are good or bad for the welfare of the people.",
              "Normative Economics describes the facts of the economy while positive Economics involves evaluating whether some of these are good or bad for the welfare of the people.",
              "Positive Economics prescribes while normative Economics describes."
            ],
            correctIndex: 1
          },
          {
            text: "Which of the following is not within the scope of Business Economics?",
            options: [
              "Capital Budgeting",
              "Risk Analysis",
              "Business Cycles",
              "Accounting Standards"
            ],
            correctIndex: 3
          },
          {
            text: "Which of the following statements is incorrect?",
            options: [
              "Business economics is normative in nature.",
              "Business Economics has a close connection with statistics.",
              "Business Economist need not worry about macro variables.",
              "Business Economics is also called Managerial Economics."
            ],
            correctIndex: 2
          },
          {
            text: "Economic goods are considered scarce resources because they",
            options: [
              "Cannot be increased in quantity.",
              "Do not exist in adequate quantity to satisfy the requirements of the society.",
              "Are of primary importance in satisfying social requirements.",
              "Are limited to man made goods."
            ],
            correctIndex: 1
          },
          {
            text: "In a free market economy, the allocation of resources is determined by",
            options: [
              "Voting done by consumers.",
              "A central planning authority.",
              "Consumer preferences.",
              "The level of profits of firms."
            ],
            correctIndex: 2
          },
          {
            text: "A capitalist economy uses ______ as the principal means of allocating resources.",
            options: [
              "Demand",
              "Supply",
              "Efficiency",
              "Prices"
            ],
            correctIndex: 3
          },
          {
            text: "Which of the following is considered as a disadvantage of allocating resources using the market system?",
            options: [
              "Income will tend to be unevenly distributed.",
              "People do not get goods of their choice.",
              "Men of initiative and enterprise are not rewarded.",
              "Profits will tend to be low."
            ],
            correctIndex: 0
          },
          {
            text: "Which of the following statements does not apply to a market economy?",
            options: [
              "Firms decide whom to hire and what to produce.",
              "Firms aim at maximizing profits.",
              "Households decide which firms to work for and what to buy with their incomes.",
              "Government policies are the primary forces that guide the decisions of firms and households."
            ],
            correctIndex: 3
          },
          {
            text: "In a mixed economy",
            options: [
              "All economic decisions are taken by the central authority.",
              "All economic decisions are taken by private entrepreneurs.",
              "Economic decisions are partly taken by the state and partly by the private entrepreneurs.",
              "None of the above."
            ],
            correctIndex: 2
          },
          {
            text: "The central problem in economics is that of",
            options: [
              "Comparing the success of command versus market economies.",
              "Guaranteeing that production occurs in the most efficient manner.",
              "Guaranteeing a minimum level of income for every citizen.",
              "Allocating scarce resources in such a manner that society’s unlimited needs or wants are satisfied in the best possible manner."
            ],
            correctIndex: 3
          },
          {
            text: "Capital intensive technique would get chosen in a",
            options: [
              "Labour surplus economy where the relative price of capital is lower.",
              "Capital surplus economy where the relative price of capital is lower.",
              "Developed economy where technology is better.",
              "Developing economy where technology is poor."
            ],
            correctIndex: 1
          },
          {
            text: "Which of the following is not one of the four central questions that the study of economics is supposed to answer?",
            options: [
              "Who produces what?",
              "When are goods produced?",
              "Who consumes what?",
              "How are goods produced?"
            ],
            correctIndex: 1
          },
          {
            text: "Larger production of ______ goods would lead to higher production in future.",
            options: [
              "Consumer goods",
              "Capital goods",
              "Agricultural goods",
              "Public good"
            ],
            correctIndex: 1
          },
          {
            text: "The economic system in which all the means of production are owned and controlled by private individuals for profit.",
            options: [
              "Socialism",
              "Capitalism",
              "Mixed economy",
              "Communism"
            ],
            correctIndex: 1
          },
          {
            text: "Macro Economics is the study of",
            options: [
              "All aspects of scarcity.",
              "The national economy and the global economy as a whole.",
              "Big businesses.",
              "The decisions of individual businesses and people."
            ],
            correctIndex: 1
          },
          {
            text: "Freedom of choice is the advantage of",
            options: [
              "Socialism",
              "Capitalism",
              "Communism",
              "None of the above"
            ],
            correctIndex: 1
          },
          {
            text: "Exploitation and inequality are minimal under",
            options: [
              "Socialism",
              "Capitalism",
              "Mixed economy",
              "None of the above"
            ],
            correctIndex: 0
          },
          {
            text: "Administered prices refer to",
            options: [
              "Prices determined by forces of demand and supply.",
              "Prices determined by sellers in the market.",
              "Prices determined by an external authority which is usually the government.",
              "None of the above."
            ],
            correctIndex: 2
          },
          {
            text: "In Economics, the central economic problem means",
            options: [
              "Output is restricted to the limited availability of resources.",
              "Consumers do not have as much money as they would wish.",
              "There will always be certain level of unemployment.",
              "Resources are not always allocated in an optimum way."
            ],
            correctIndex: 0
          },
          {
            text: "Scarcity definition of Economics is given by",
            options: [
              "Alfred Marshall",
              "Samuelson",
              "Robinson",
              "Adam Smith"
            ],
            correctIndex: 1
          },
          {
            text: "The definition ‘Science which deals with wealth of Nation’ was given by",
            options: [
              "Alfred Marshall",
              "A. C. Pigou",
              "Adam Smith",
              "J. B. Say"
            ],
            correctIndex: 2
          },
          {
            text: "Which of the following is not one of the features of capitalist economy?",
            options: [
              "Right of private property",
              "Freedom of choice by the consumers",
              "No profit, No Loss motive",
              "Competition"
            ],
            correctIndex: 2
          },
          {
            text: "There is need of economic study, because",
            options: [
              "The resources are limited",
              "The wants are unlimited",
              "The resources are unlimited",
              "Both a and b"
            ],
            correctIndex: 3
          },
          {
            text: "The benefit of economic study is",
            options: [
              "It ensures that all problems will be appropriately tackled.",
              "It helps in identifying problems.",
              "It enables to examine a problem in its right perspective.",
              "It gives exact solutions to every problem."
            ],
            correctIndex: 2
          },
          {
            text: "The managerial economics",
            options: [
              "Is Applied Economics that fills the gap between economic theory and business practice.",
              "Is just a theory concept.",
              "Trains managers how to behave in recession.",
              "Provides the tools which explain various concepts."
            ],
            correctIndex: 0
          },
          {
            text: "Which of the following statements is correct?",
            options: [
              "Micro economics is important for study of a particular household and a particular firm.",
              "Macroeconomics is important for study of economic conditions of a country.",
              "None of the above.",
              "Both a and b."
            ],
            correctIndex: 3
          },
          {
            text: "Mr. Satish hired a business consultant to guide him for growth of his business. The consultant visited his factory and suggested some changes with respect to staff appointment, loan availability and so on. Which approach is that consultant using?",
            options: [
              "Micro economics",
              "Macro economics",
              "None of the above",
              "Both a and b"
            ],
            correctIndex: 0
          },
          {
            text: "Profit motive is a merit of",
            options: [
              "Socialism",
              "Capitalist",
              "Mixed economy",
              "None of the above"
            ],
            correctIndex: 1
          },
          {
            text: "______ is also called as command economy.",
            options: [
              "Socialist",
              "Capitalist",
              "Mixed economy",
              "None of the above"
            ],
            correctIndex: 0
          },
          {
            text: "Which of the following statements is/are correct regarding business economics?",
            options: [
              "Business economics attempts to indicate how business policies are firmly rooted in economic principles.",
              "Business economics uses micro economic analysis of the business unit and macro-economic analysis of business environment.",
              "Business economics takes a pragmatic approach towards facilitating an integration between economic theory and business practices.",
              "All the above."
            ],
            correctIndex: 3
          },
          {
            text: "Unlimited ends and limited means together present the problem of",
            options: [
              "Scarcity of resources",
              "Choice",
              "Distribution",
              "None of the above"
            ],
            correctIndex: 1
          },
          {
            text: "Which of the following is/are limitations of the wealth definitions of economics given by classical economists?",
            options: [
              "By considering the problem of production distribution exchange of wealth, they focused attention on important issues with which economics is concerned.",
              "By restricting the definition of wealth to material wealth, the neglect of immaterial services, they narrowed down the scope of economics.",
              "Both A and B",
              "None of these"
            ],
            correctIndex: 2
          },
          {
            text: "According to which of the following definitions, economics studies human behavior regarding how he satisfied his wants with scarce resources?",
            options: [
              "Robbins definition",
              "Marshall’s definition",
              "J.B. Say’s definition",
              "Adam Smith’s definition"
            ],
            correctIndex: 0
          },
          {
            text: "______ is concerned with welfare proposition.",
            options: [
              "Normative Economics",
              "Positive Economics",
              "Both A and B",
              "None of these"
            ],
            correctIndex: 0
          },
          {
            text: "Which of the following is/are correct about micro economics?",
            options: [
              "Micro economics studies the economy in its totality.",
              "In micro economics we make a microscopic study of the economy.",
              "Micro economics deals with the division of total output among industries and firms, the allocation of resources among competing uses.",
              "Both B and C"
            ],
            correctIndex: 3
          },
          {
            text: "If Americans today, for example, were to content to live at the level of the Indian middle class people, all their wants would be fully satisfied with their available resources and capacity to produce. On the basis of the above statement, which of the following conclusion can be made?",
            options: [
              "The possession of goods and services by USA has enormously increased to exceed their wants.",
              "The affluent and developed countries of USA and Western Europe face the problem of scarcity even today as their present wants remain ahead of their increased resources and capacity to produce.",
              "The affluent and developed countries are not facing the problem of scarcity.",
              "None of these"
            ],
            correctIndex: 1
          },
          {
            text: "If there is no central planning authority to make the fundamental economic decisions and thus to allocate productive resources, how can then free enterprise or capitalist economy solve its central problems?",
            options: [
              "Through the power of God.",
              "On the basis of decision taken by industrial groups.",
              "The free market economy uses the impersonal forces of the market to solve its central problems.",
              "None of these"
            ],
            correctIndex: 2
          },
          {
            text: "The industrialization and economic development of the USA, Great Britain and other Western European countries have taken place under the condition of",
            options: [
              "Socialism and planned structure.",
              "Capitalism and laissez faire.",
              "Mixed economic structure.",
              "None of these"
            ],
            correctIndex: 1
          },
          {
            text: "The greater the inequalities in the distribution of money incomes, the ______ the inequalities in the distribution of national output.",
            options: [
              "Greater",
              "Lesser",
              "A or B",
              "None of these"
            ],
            correctIndex: 0
          },
          {
            text: "A wise individual or a society likes to provide for its growth of productive capacity. This requires that a part of its resources should be devoted to the production of",
            options: [
              "Consumer goods",
              "Capital goods",
              "Defense goods",
              "None of these"
            ],
            correctIndex: 1
          },
          {
            text: "In the beginning the name of economics was",
            options: [
              "Economics of wealth",
              "Political economy",
              "Welfare economics",
              "None of these"
            ],
            correctIndex: 1
          },
          {
            text: "The word economics has been derived from a ______ word.",
            options: [
              "French",
              "Latin",
              "Greek",
              "German"
            ],
            correctIndex: 2
          },
          {
            text: "Economics is mainly concerned with",
            options: [
              "The achievement of economic development",
              "The achievement and use of material requirements to satisfy human wants",
              "The exploring more resources to satisfy human wants",
              "The limiting human wants with respect to given resources"
            ],
            correctIndex: 1
          },
          {
            text: "Business economics is a field in ______ which uses economic theory and quantitative methods to analyze business enterprises.",
            options: [
              "Welfare Economics",
              "Development Economics",
              "Applied economics",
              "None of these"
            ],
            correctIndex: 2
          },
          {
            text: "Economics is a branch of ______ focused on the production, distribution and consumption of goods and services.",
            options: [
              "Natural science",
              "Physical science",
              "Social science",
              "None of these"
            ],
            correctIndex: 2
          },
          {
            text: "Business economics is ______ in its approach.",
            options: [
              "Idealistic",
              "Pragmatic",
              "Both A and B",
              "None of these"
            ],
            correctIndex: 1
          },
          {
            text: "The scope of business economics includes",
            options: [
              "Demand analysis",
              "Cost analysis",
              "Inventory management",
              "All of these"
            ],
            correctIndex: 3
          },
          {
            text: "A socialist economy is a system of production where goods and services are produced",
            options: [
              "To generate profit",
              "Directly for use",
              "Both A and B",
              "None of these"
            ],
            correctIndex: 1
          },
          {
            text: "Which one of the following statements is correct regarding socialist economy?",
            options: [
              "Production is planned or coordinated and suffers from the business cycle.",
              "Production suffers from the business cycle.",
              "Production is planned and does not suffer from business cycle.",
              "None of these"
            ],
            correctIndex: 2
          },
          {
            text: "Which of the following is not a merit of socialist economy?",
            options: [
              "It provides equal access to health care and education.",
              "Workers are no longer exploited because they own the means of production.",
              "Profits are not spread equitably among all workers according to their individual contributions.",
              "Natural resources are preserved for the good of the whole."
            ],
            correctIndex: 2
          },
          {
            text: "Which of the following is/are the merits of mixed economic system?",
            options: [
              "Entrepreneurs able to make profit",
              "Progressive taxes to reduce inequality",
              "Government’s provision of public goods",
              "All of the above"
            ],
            correctIndex: 3
          },
          {
            text: "Which of the following falls under Micro Economics?",
            options: [
              "National Income",
              "General Price level",
              "Factor Pricing",
              "National Saving and Investment"
            ],
            correctIndex: 2
          },
          {
            text: "Which of the following statements is correct?",
            options: [
              "Employment and economic growth are studied in micro-economics.",
              "Micro economics deals with balance of trade.",
              "Economic condition of a section of the people is studied in micro-economics.",
              "External value of money is dealt with in micro-economics."
            ],
            correctIndex: 2
          },
          {
            text: "Which of the following is not an economic activity?",
            options: [
              "A son looking after his ailing mother",
              "A chartered accountant doing his own practice",
              "A soldier serving at the border",
              "A farmer growing millets"
            ],
            correctIndex: 0
          },
          {
            text: "A government deficit will reduce unemployment and cause an increase in prices. This statement is",
            options: [
              "Positive",
              "Normative",
              "Both",
              "None of the above"
            ],
            correctIndex: 2
          },
          {
            text: "Normative economics is ______ in nature",
            options: [
              "Modern",
              "Descriptive",
              "Prescriptive",
              "None of the above"
            ],
            correctIndex: 2
          },
          {
            text: "The term economics is derived from Greek word Oikonomia which means",
            options: [
              "Household management",
              "Art of Living",
              "Science of good governance",
              "Law of rational behavior"
            ],
            correctIndex: 0
          },
          {
            text: "The famous book Wealth of Nations was published in",
            options: [
              "1776",
              "1750",
              "1850",
              "1886"
            ],
            correctIndex: 0
          },
          {
            text: "______ guide a capitalist economy to decide what to produce.",
            options: [
              "Market survey",
              "Economic models",
              "Intensity of consumer demand",
              "Cost of Production"
            ],
            correctIndex: 2
          },
          {
            text: "Which of the following is not a characteristics of capitalist economy?",
            options: [
              "Right to Private property",
              "Freedom of Enterprise",
              "Consumer sovereignty",
              "Planned Production"
            ],
            correctIndex: 3
          },
          {
            text: "______ economics explains cause and effect relationship between economic phenomena.",
            options: [
              "Positive",
              "Normative",
              "Negative",
              "Applied"
            ],
            correctIndex: 0
          },
          {
            text: "______ refers to the sum total of arrangements for the production and distribution of goods and services in a society.",
            options: [
              "Business Economics",
              "Micro Economics",
              "Economic System",
              "Economics"
            ],
            correctIndex: 2
          },
          {
            text: "______ is the mainstay in the capitalism.",
            options: [
              "Profit motive",
              "Private property",
              "Consumers",
              "Competition"
            ],
            correctIndex: 0
          },
          {
            text: "Which of the following is not an example of Capitalist economy?",
            options: [
              "USA",
              "Germany",
              "North Korea",
              "South Korea"
            ],
            correctIndex: 2
          },
          {
            text: "The word Economics originates from the word",
            options: [
              "Oikonomicos",
              "Oyekonomic",
              "Oikonomia",
              "Oiconomia"
            ],
            correctIndex: 2
          },
          {
            text: "______ refers to the process of selecting an appropriate alternative that will provide the most efficient means of attaining a desired end, from two or more alternative courses of action?",
            options: [
              "Problem solving",
              "Problem analyzing",
              "Managerial expertise",
              "Decision making"
            ],
            correctIndex: 3
          },
          {
            text: "Which of the following is not the feature of capitalist economy?",
            options: [
              "Right to private property",
              "Freedom of economic choice.",
              "Collective ownership",
              "Consumer Sovereignty"
            ],
            correctIndex: 2
          },
          {
            text: "The concept of socialist economy was propounded by",
            options: [
              "Karl Marx and Frederic Engels.",
              "Marshall",
              "Adam Smith",
              "Joel Dean"
            ],
            correctIndex: 0
          },
          {
            text: "Which economic system is the predominant in the modern global economy?",
            options: [
              "Socialism",
              "Capitalism",
              "Mixed",
              "All of the above"
            ],
            correctIndex: 2
          },
          {
            text: "Under the pragmatic approach, economics is abstract and purely theoretical in nature and takes ______ assumptions.",
            options: [
              "Practical, Unrealistic",
              "Practical, Realistic",
              "Theoretical, Unrealistic",
              "Theoretical, Realistic"
            ],
            correctIndex: 1
          },
          {
            text: "Which of the following is a subject matter of macroeconomics?",
            options: [
              "Behavior of firms",
              "Factor Pricing",
              "Overall level of savings and investments",
              "The economic condition of a section of people"
            ],
            correctIndex: 2
          },
          {
            text: "Mr. X had been given a task to segregate normative and non-normative statements. Help him to identify which one of these is a normative economic statement?",
            options: [
              "Pollution level is rising day by day because of urbanization.",
              "The part-time working hours of students should be increased to 25 hours per week.",
              "Due to the increased number of cars on roads, people will be stuck in traffic jams.",
              "The government has allotted a major portion of revenue to defense."
            ],
            correctIndex: 1
          },
          {
            text: "What is the nature of business economics, which is an applied branch of economics?",
            options: [
              "It is positive in nature.",
              "It is normative in nature.",
              "It is neutral in nature.",
              "It is both positive as well as normative in nature."
            ],
            correctIndex: 3
          },
          {
            text: "Which statement differentiates business economics from economics?",
            options: [
              "It is abstract in nature.",
              "It is a narrower concept than economics.",
              "It is no different from economics.",
              "It is pragmatic in nature."
            ],
            correctIndex: 3
          },
          {
            text: "Sarah runs a lemonade stall, her decision-making process involves assessing the demand for her lemonade, pricing strategies, and maximizing her profit within the limited scope of her small business. Which level of the economy does Sarah’s lemonade stall represent?",
            options: [
              "Macro Economy",
              "Global Economy",
              "Micro Economy",
              "National Economy"
            ],
            correctIndex: 2
          },
          {
            text: "In which economy, the material means of production i.e. factories, capital, mines, etc. are owned by the whole community represented by the State?",
            options: [
              "Socialist Economy",
              "Capitalist Economy",
              "Mixed Economy",
              "Communist Economy"
            ],
            correctIndex: 0
          },
          {
            text: "Which of the following is related with the total arrangements for the production and distribution of goods and services in a society?",
            options: [
              "Economic Problem",
              "Economic Choice",
              "Economic System",
              "Economic Institution"
            ],
            correctIndex: 2
          },
          {
            text: "Business Economics is basically concerned with",
            options: [
              "Applied Economics",
              "Managerial Economics",
              "Micro Economics",
              "Macro Economics"
            ],
            correctIndex: 2
          },
          {
            text: "Price in capitalist economy is determined by",
            options: [
              "Small private firms",
              "Big corporates",
              "Market forces of demand and supply",
              "Government"
            ],
            correctIndex: 2
          },
          {
            text: "Command economy is another name for",
            options: [
              "Capitalist economy",
              "Socialist economy",
              "Mixed economy",
              "Macro economy"
            ],
            correctIndex: 1
          },
          {
            text: "Which of the following is not a merit of Capitalist economy?",
            options: [
              "Faster economic growth",
              "Collective ownership",
              "High degree of operative efficiency",
              "Incentives for innovation and technological progress"
            ],
            correctIndex: 1
          },
          {
            text: "The microeconomic theory mainly does not deal with which of the following issues",
            options: [
              "Stage of business cycle",
              "Demand analysis and forecasting",
              "Production and cost analysis",
              "Inventory management"
            ],
            correctIndex: 0
          },
          {
            text: "Which of the following is not correct about business economics with reference to economics?",
            options: [
              "Business economics helps in proper decision making in a particular business activity.",
              "Business economics has a narrow scope in comparison to economics.",
              "Economics is an applied branch of business economics.",
              "Business economics includes the analysis of micro level issues like demand, supply, etc."
            ],
            correctIndex: 2
          },
          {
            text: "Which of the following does not describe the nature of business economics?",
            options: [
              "It is normative in nature.",
              "It is abstract and purely theoretical.",
              "It is an art.",
              "It incorporates elements of Macro Analysis."
            ],
            correctIndex: 1
          },
          {
            text: "Buyers ultimately determine which goods and services will be produced and in what quantities. The given statement is the meaning of",
            options: [
              "Planned economy",
              "Consumer Sovereignty",
              "Freedom of economic choice",
              "Freedom of enterprise"
            ],
            correctIndex: 1
          },
          {
            text: "Which of the following is not one of the four basic economic problems of an economy?",
            options: [
              "What to produce?",
              "Where to produce?",
              "For whom to produce?",
              "What provisions are to be made for economic growth?"
            ],
            correctIndex: 1
          },
          {
            text: "Finance minister was discussing, balance of trade and balance of payment. This area comes under",
            options: [
              "Micro economics",
              "Macro economics",
              "Capitalist economy",
              "Mixed economy"
            ],
            correctIndex: 1
          },
          {
            text: "Which of the following is an example of normative statement?",
            options: [
              "The demand for a good will increase if its price decreases",
              "The government should increase taxes on liquor to reduce its consumption",
              "A decrease in interest rates will lead to an increase in investment",
              "An increase in government spending will reduce the unemployment rate"
            ],
            correctIndex: 1
          }
        ]
      },
      {
  id: "eco_ch2_u1",
  name: "Theory of Demand (Unit 1)",
  questions: [
    {
      text: "Demand for a commodity refers to:",
      options: [
        "Desire backed by ability to pay for the commodity.",
        "Need for the commodity and willingness to pay for it",
        "The quantity demanded of that commodity at ascertain price.",
        "The quantity of the commodity demanded at a certain price during any particular period of time."
      ],
      correctIndex: 3
    },
    {
      text: "Contraction of demand is the result of:",
      options: [
        "Decrease in the number of consumers.",
        "Increase in the price of the good concerned.",
        "Increase in the prices of other goods.",
        "Decrease in the income of purchasers"
      ],
      correctIndex: 1
    },
    {
      text: "All but one of the following are assumed to remain the same while drawing an individual’s demand curve for a commodity. Which one is it?",
      options: [
        "The preference of the individual.",
        "His monetary income.",
        "Price of the commodity",
        "Price of related goods."
      ],
      correctIndex: 2
    },
    {
      text: "Which of the following pairs of goods is an example of substitute?",
      options: [
        "Tea and sugar",
        "Tea and coffee",
        "Pen and Ink",
        "Shirt and trousers"
      ],
      correctIndex: 1
    },
    {
      text: "In the case of a straight line demand curve meeting the two axes, the price-elasticity of demand at the mid-point of the line would be:",
      options: ["0","1","1.5","2"],
      correctIndex: 1
    },
    {
      text: "The Law of Demand, assuming other things to remain constant, establishes the relationship between:",
      options: [
        "Income of the consumer and the quantity of a good demanded by him.",
        "Price of a good and the quantity demanded",
        "Price of a good and the demand for its substitute.",
        "Quantity demanded of a good and the relative prices of its complementary goods."
      ],
      correctIndex: 1
    },
    {
      text: "Identify the factor which generally keeps the price-elasticity of demand for a good low:",
      options: [
        "Variety of uses for that good",
        "Very low price of a commodity",
        "Close substitutes for that good.",
        "High proportion of the consumer’s income spent on it"
      ],
      correctIndex: 1
    },
    {
      text: "Identify the coefficient of price-elasticity of demand when the percentage increase in the quantity of a good demanded is smaller than the percentage fall in its price:",
      options: [
        "Equal to one",
        "Greater than one",
        "Less than one",
        "Zero."
      ],
      correctIndex: 2
    },
    {
      text: "In the case of an inferior good, the income elasticity of demand is:",
      options: ["Positive","Zero","Negative","Infinite"],
      correctIndex: 2
    },
    {
      text: "If the demand for a good is inelastic, an increase in its price will cause the total expenditure of the consumers of the good to:",
      options: [
        "Remain the same.",
        "Increase",
        "Decrease",
        "Any of these."
      ],
      correctIndex: 1
    },
    {
      text: "If regardless of changes in its price, the quantity demanded of a good remains unchanged, then the demand curve for the good will be:",
      options: [
        "Horizontal",
        "Vertical",
        "Positively sloped.",
        "Negatively sloped."
      ],
      correctIndex: 1
    },
    {
      text: "Suppose the price of Pepsi increases, we will expect the demand curve of Coca Cola to:",
      options: [
        "Shift towards left since these are substitute",
        "Shift towards right since these are substitutes",
        "Remain at the same level",
        "None of the above"
      ],
      correctIndex: 1
    },
    {
      text: "All of the following are determinants of demand except:",
      options: [
        "Tastes and preferences",
        "Quantity supplied.",
        "Income of the consumer",
        "Price of related goods."
      ],
      correctIndex: 1
    },
    {
      text: "A movement along the demand curve for soft drinks is best described as:",
      options: [
        "An increase in demand.",
        "A decrease in demand",
        "A change in quantity demanded.",
        "A change in demand."
      ],
      correctIndex: 2
    },
    {
      text: "If the price of Pepsi decreases relative to the price of Coke and 7-UP, the demand for:",
      options: [
        "Coke will decrease",
        "7-Up will decrease.",
        "Coke and 7-UP will increase.",
        "Coke and 7-Up will decrease"
      ],
      correctIndex: 3
    },
    {
      text: "If a good is a luxury, its income elasticity of demand is",
      options: [
        "Positive and less than 1.",
        "Negative but greater than -1.",
        "Positive and greater than 1.",
        "Zero"
      ],
      correctIndex: 2
    },
    {
      text: "The price of hot dogs increases by 22% and the quantity of hot dogs demanded falls by 25%. This indicates that demand for hot dogs is:",
      options: ["Elastic","Inelastic","Unitarily elastic","Perfectly elastic"],
      correctIndex: 0
    },
    {
      text: "If the quantity demanded of mutton increases by 5% when the price of chicken increases by 20%, the cross price elasticity of demand between mutton and chicken is",
      options: ["-0.25","0.25","-4","4"],
      correctIndex: 1
    },
    {
      text: "Given the following four possibilities, which one results in an increase in total consumer expenditure?",
      options: [
        "Demand is unitary elastic and price falls.",
        "Demand is elastic and price rises.",
        "Demand is inelastic and price falls.",
        "Demand is inelastic and prices rises"
      ],
      correctIndex: 3
    },
    {
      text: "Which of the following is an incorrect statement?",
      options: [
        "When goods are substitutes, a fall in the price of one (ceteris paribus) leads to a fall in the quantity demanded of its substitutes.",
        "When commodities are complements, a fall in the price of one (other things being equal) will cause the demand of the other to rise",
        "As the income of the consumer increases, the demand for the commodity increases always and vice versa.",
        "When a commodity becomes fashionable people prefer to buy it and therefore its demand increases"
      ],
      correctIndex: 2
    },
    {
      text: "Suppose the price of movies seen at a theatre rises from Rs 120 per person to Rs 200 per person. The theatre manager observes that the rise in price causes attendance at a given movie to fall from 300 persons to 200 persons. What is the price elasticity of demand for movies? (Use Arc Elasticity Method)",
      options: ["0.5","0.8","1.0","1.2"],
      correctIndex: 0
    },
    {
      text: "Suppose a department store has a sale on its silverware. If the price of a plate-setting is reduced from Rs. 300 to Rs. 200 and the quantity demanded increases from 3,000 plate-settings to 5,000 plate-settings, what is the price elasticity of demand for silverware? (Use Arc Elasticity Method)",
      options: ["0.8","1.0","1.25","1.5"],
      correctIndex: 2
    },
    {
      text: "When the numerical value of cross elasticity between two goods is very high, it means",
      options: [
        "The goods are perfect complements and therefore have to be used together",
        "The goods are perfect substitutes and can be used with ease in place of one another",
        "There is a high degree of substitutability between the two goods",
        "The goods are neutral and therefore cannot be considered as substitutes"
      ],
      correctIndex: 1
    },
    {
      text: "If the local pizzeria raises the price of a medium pizza from Rs. 60 to Rs. 100 and quantity demanded falls from 700 pizzas a night to 100 pizzas a night, the price elasticity of demand for pizzas is: (Use Arc Elasticity Method)",
      options: ["0.67","1.5","2.0","3.0"],
      correctIndex: 3
    },
    {
      text: "If electricity demand is inelastic, and electricity charges increase, which of the following is likely to occur’?",
      options: [
        "Quantity demanded will fall by a relatively large amount.",
        "Quantity demanded will fall by a relatively small amount",
        "Quantity demanded will rise in the short run, but fall in the long run",
        "Quantity demanded will fall in the short run, but rise in the long run"
      ],
      correctIndex: 1
    },
    {
      text: "Suppose the demand for meals at a medium-priced restaurant is elastic. If the management of the restaurant is considering raising prices, it can expect a relatively:",
      options: [
        "Large fall in quantity demanded",
        "Large fall in demand",
        "Small fall in quantity demanded.",
        "Small fall in demand."
      ],
      correctIndex: 0
    },
    {
      text: "Point elasticity is useful for which of the following situations?",
      options: [
        "The bookstore is considering doubling the price of notebooks.",
        "A restaurant is considering lowering the price of its most expensive dishes by 50 percent.",
        "An auto producer is interested in determining the response of consumers to the price of cars being lowered by Rs 100.",
        "None of the above."
      ],
      correctIndex: 2
    },
    {
      text: "A decrease in price will result in an increase in total revenue if",
      options: [
        "The percentage change in quantity demanded in less than the percentage change in price.",
        "The percentage change in quantity demanded is greater than the percentage change in price.",
        "Demand is inelastic.",
        "The consumer is operating along a linear demand curve at a point at which the price is very low and the quantity demanded is very high."
      ],
      correctIndex: 1
    },
    {
      text: "An increase in price will result in an increase in total revenue if:",
      options: [
        "The percentage change in quantity demanded is less than the percentage change in price.",
        "The percentage change in quantity demanded is greater than the percentage change in price.",
        "Demand is elastic",
        "The consumer is operating along a linear demand curve at a point at which the price is very high and the quantity demanded is very low"
      ],
      correctIndex: 0
    },
    {
      text: "Demand for a good will tend to be more elastic if it exhibits which of the following characteristics?",
      options: [
        "It represents a small part of the consumer’s income.",
        "The good has many substitutes available.",
        "It is a necessity (as opposed to a luxury).",
        "There is little time for the consumer to adjust to the price change."
      ],
      correctIndex: 1
    },
    {
      text: "Demand for a good will tend to be more inelastic if it exhibits which of the following characteristics?",
      options: [
        "The good has many substitutes",
        "The good is a luxury (as opposed to a necessity).",
        "The good is a small part of the consumer’s income.",
        "There is a great deal of time for the consumer to adjust to the change in prices"
      ],
      correctIndex: 2
    },
    {
      text: "Demand for a good will tend to be more inelastic if it exhibits which of the following characteristics?",
      options: [
        "The good has many substitutes.",
        "The good is a luxury (as opposed to a necessity).",
        "The good is a small part of the consumer’s income.",
        "There is a great deal of time for the consumer to adjust to the change in prices"
      ],
      correctIndex: 2
    },
    {
      text: "Suppose a consumer’s income increases from Rs. 30,000 to Rs. 36,000. As a result, the consumer increases her purchases of compact discs (CDs) from 25 CDs to 30 CDs. What is the consumer’s income elasticity of demand for CDs? (Use Arc Elasticity Method)",
      options: ["0.5","1.0","1.5","2.0"],
      correctIndex: 0
    },
    {
      text: "What will happen in the rice market if buyers are expecting higher rice prices in the near future?",
      options: [
        "The demand for rice will increase and the demand curve will shift to the right",
        "The demand for rice will decrease and the demand curve will shift to the left",
        "The demand for rice will be unaffected as it is a necessity",
        "The demand for wheat will increase and the demand curve will shift to the right"
      ],
      correctIndex: 0
    },
    {
      text: "In the case of a Giffen good, the demand curve will usually be",
      options: [
        "Horizontal",
        "Downward-sloping to the right.",
        "Vertical",
        "Upward-sloping to the right"
      ],
      correctIndex: 3
    },
    {
      text: "For a normal good with a downward sloping demand curve",
      options: [
        "The price elasticity of demand is negative; the income elasticity of demand is negative.",
        "The price elasticity of demand is positive; the income elasticity of demand is negative.",
        "The price elasticity of demand is positive; the income elasticity of demand is positive.",
        "The price elasticity of demand is negative; the income elasticity of demand is positive."
      ],
      correctIndex: 3
    },
    {
      text: "Conspicuous goods are also known as",
      options: [
        "Prestige goods",
        "Snob goods",
        "Veblen goods",
        "All of the above"
      ],
      correctIndex: 3
    },
    {
      text: "The quantity purchased remains constant irrespective of the change in income. This is known as",
      options: [
        "Negative income elasticity of demand",
        "Income elasticity of demand less than one",
        "Zero income elasticity of demand",
        "Income elasticity of demand is greater than one"
      ],
      correctIndex: 2
    },
    {
      text: "As income increases, the consumer will go in for superior goods and consequently the demand for inferior goods will fall. This means inferior goods have",
      options: [
        "Income elasticity of demand less than one",
        "Negative income elasticity of demand",
        "Zero income elasticity of demand",
        "Unitary income elasticity of demand"
      ],
      correctIndex: 1
    },
    {
      text: "When income increases the money spent on necessaries of life may not increase in the same proportion, This means",
      options: [
        "Income elasticity of demand is zero",
        "Income elasticity of demand is one",
        "Income elasticity of demand is greater than one",
        "Income elasticity of demand is less than one"
      ],
      correctIndex: 3
    },
    {
      text: "The luxury goods like jewellery and fancy articles will have",
      options: [
        "Low income elasticity of demand",
        "High income elasticity of demand",
        "Zero income elasticity of demand",
        "None of the above"
      ],
      correctIndex: 1
    },
    {
      text: "A good which cannot be consumed more than once is known as",
      options: [
        "Durable good",
        "Non-durable good",
        "Producer good",
        "None of the above"
      ],
      correctIndex: 1
    },
    {
      text: "A relative price is",
      options: [
        "Price expressed in terms of money",
        "What you get paid for babysitting your cousin",
        "The ratio of one money price to another",
        "Equal to a money price"
      ],
      correctIndex: 2
    },
    {
      text: "Demand is the",
      options: [
        "The desire for a commodity given its price and those of related commodities",
        "The entire relationship between the quantity demanded and the price of a good other things remaining the same",
        "Willingness to pay for a good if income is larger enough",
        "Ability to pay for a good"
      ],
      correctIndex: 1
    },
    {
      text: "Suppose potatoes have (-)0.4 as income elasticity. We can say from the data given that:",
      options: [
        "Potatoes are superior goods",
        "Potatoes are necessities",
        "Potatoes are inferior goods.",
        "There is a need to increase the income of consumers so that they can purchase potatoes."
      ],
      correctIndex: 2
    },
    {
      text: "The price of tomatoes increases and people buy tomato puree. You infer that tomato puree and tomatoes are",
      options: [
        "Normal goods",
        "Complements",
        "Substitutes",
        "Inferior goods"
      ],
      correctIndex: 2
    },
    {
      text: "Chicken and fish are substitutes. If the price of chicken increases, the demand for fish will",
      options: [
        "Increase or decrease but the demand curve for chicken will not change",
        "Increase and the demand curve for fish will shift rightwards",
        "Not change but there will be a movement along the demand curve for fish.",
        "Decrease and the demand curve for fish will shift leftwards."
      ],
      correctIndex: 1
    },
    {
      text: "Potato chips and popcorn are substitutes. A rise in the price of potato chips will —————— the demand for popcorn and the quantity of popcorn sold will ———————",
      options: [
        "Increase; increase",
        "Increase; decrease",
        "Decrease; decrease",
        "Decrease; increase"
      ],
      correctIndex: 0
    },
    {
      text: "If the price of orange Juice increases, the demand for apple Juice will _____________.",
      options: [
        "Increase because they are substitutes",
        "Decrease because they are substitutes",
        "Remain the same because real income is increased",
        "Decrease as real income decreases"
      ],
      correctIndex: 0
    },
    {
      text: "An increase in the demand for computers, other things remaining same, will:",
      options: [
        "Increase the number of computers bought.",
        "Decrease the price but increase the number of computers bought.",
        "Increase the price of computers.",
        "Increase the price and number of computers bought."
      ],
      correctIndex: 3
    },
    {
      text: "When total demand for a commodity whose price has fallen increases, it is due to:",
      options: [
        "Income effect.",
        "Substitution effect",
        "Complementary effect",
        "Price effect"
      ],
      correctIndex: 3
    },
    {
      text: "With a fall in the price of a commodity:",
      options: [
        "Consumer’s real income increases",
        "Consumer’s real income decreases",
        "There is no change in the real income of the consumer",
        "None of the above"
      ],
      correctIndex: 0
    },
    {
      text: "With an increase in the price of diamond, the quantity demanded also increases. This is because it is a:",
      options: [
        "Substitute good",
        "Complementary good",
        "Conspicuous good",
        "None of the above"
      ],
      correctIndex: 2
    },
    {
      text: "An example of goods that exhibit direct price-demand relationship is",
      options: [
        "Giffen goods",
        "Complementary goods",
        "Substitute goods",
        "None of the above"
      ],
      correctIndex: 0
    },
    {
      text: "In Economics, when demand for a commodity increases with a fall in its price it is known as:",
      options: [
        "Contraction of demand",
        "Expansion of demand",
        "No change in demand",
        "None of the above"
      ],
      correctIndex: 1
    },
    {
      text: "A decrease in the demand for cameras, other things remaining the same will",
      options: [
        "Increase the number of cameras bought",
        "Decrease the price but increase the number of cameras bought",
        "Decrease in quantity of camera demanded",
        "Decrease the price and decrease in the number of cameras bought."
      ],
      correctIndex: 3
    },
    {
      text: "Which of the following statements about inferior goods is/are false?\nI. Inferior goods are those that we will never buy, no matter how cheap they are.\nII. Inferior goods are those that we buy more of, if we become poorer.\nIII. Inferior goods are those that we buy more of, if we become richer.",
      options: [
        "I and III only",
        "I only",
        "III only.",
        "I, II, and III."
      ],
      correctIndex: 0
    },
    {
      text: "The price of a commodity decreases from Rs 6 to Rs 4 and the quantity demanded of the good increases from 10 units to 15 units, find the coefficient of price elasticity.",
      options: ["1.5","2.5","-1.5","0.5"],
      correctIndex: 0
    },
    {
      text: "‘No matter what the price of coffee is, Arjun always spend a total of exactly 100 per week on coffee.’ The statement implies that:",
      options: [
        "Arjun is very fond of coffee and therefore he has an inelastic demand for coffee",
        "Arjun has elastic demand for coffee",
        "Arjun’s demand for coffee is relatively less elastic",
        "Arjun’s demand for coffee is unit elastic"
      ],
      correctIndex: 3
    },
    {
      text: "A firm learns that the own price elasticity of a product it manufactures is 3.5. What would be the correct action for this firm to take if it wishes to raise its total revenue?",
      options: [
        "Lower the price because demand for the good is elastic.",
        "Raise the price because demand for the product is inelastic.",
        "Raise the price because demand is elastic.",
        "We need information in order to answer this question."
      ],
      correctIndex: 0
    },
    {
      text: "At higher prices people demand more of certain goods not for their worth but for their prestige value – This is called",
      options: [
        "Veblen effect",
        "Giffen paradox",
        "Speculative effect",
        "None of the above"
      ],
      correctIndex: 0
    },
    {
      text: "If the price of air-conditioner increases from Rs 30,000 to Rs 30,010 and resultant change in demand is negligible, we use the measure of __________ to measure elasticity.",
      options: [
        "Point elasticity of demand since it is a small change",
        "Arc elasticity of demand since it is a small change",
        "Price elasticity based on average prices method",
        "Any of the above"
      ],
      correctIndex: 0
    },
    {
      text: "Given the following four possibilities, which one will result in an increase in total expenditure of the consumer?",
      options: [
        "Demand is unit elastic and price rises",
        "Demand is elastic and price rises",
        "Demand is inelastic and price falls",
        "Demand is inelastic and price rises"
      ],
      correctIndex: 3
    },
    {
      text: "The cross elasticity between Rye bread and Whole Wheat bread is expected to be:",
      options: ["Positive","Negative","Zero","Can’t say"],
      correctIndex: 0
    },
    {
      text: "The cross elasticity between Bread and DVDs is:",
      options: ["Positive","Negative","Zero","One"],
      correctIndex: 2
    },
    {
      text: "Which of the following statements is correct?",
      options: [
        "With the help of statistical tools, the demand can be forecasted with perfect accuracy",
        "The more the number of substitutes of a commodity, the more elastic is the demand",
        "Demand for butter is perfectly elastic.",
        "Gold jewellery will have negative income elasticity."
      ],
      correctIndex: 1
    },
    {
      text: "Suppose the income elasticity of education in private school in India is 3.6. What does this indicate",
      options: [
        "Private school education is highly wanted by rich",
        "Private school education is a necessity",
        "Private school education is a luxury",
        "We should have more private schools."
      ],
      correctIndex: 2
    },
    {
      text: "If the organizers of an upcoming cricket match decide to increase the ticket price in order to raise its revenues, what they have learned from past experience is;",
      options: [
        "The percentage increase in ticket rates will be always equal the percentage decrease in tickets sold",
        "The percentage increase in ticket rates will be always greater than the percentage decrease in tickets sold",
        "The percentage increase in ticket rates will be less than the percentage decrease in tickets sold",
        "(a) and (c) above are true"
      ],
      correctIndex: 1
    },
    {
      text: "The following diagram shows the relationship between price of Good X and quantity demanded of Good Y. What we infer from the diagram is;",
      options: [
        "Good X and Good Y are perfect complements",
        "Good X and Good Y are perfect substitutes",
        "Good X and Good Y are remote substitutes",
        "Good X and Good Y are close substitutes"
      ],
      correctIndex: 2
    },
    {
      text: "The diagram given below shows",
      options: [
        "A change in demand which may be caused by a rise in income and the good is a normal good",
        "A shift of demand curve caused by a fall in the price of a complementary good",
        "A change in demand which is caused by a rise in income and the good is an inferior good",
        "A shift of demand curve caused by a rise in the price of a substitute and the good is a normal good"
      ],
      correctIndex: 3
    },
    {
      text: "The demand curve of a normal good has shifted to the right. Which of the four events would have caused the shift?",
      options: [
        "A fall in the price of a substitute with the price of the good unchanged",
        "A fall in the nominal income of the consumer and a fall in the price of the normal good",
        "A fall in the price of a complementary good with the price of the normal good unchanged",
        "A fall in the price of the normal good, other things remaining the same"
      ],
      correctIndex: 2
    },
    {
      text: "If roller-coaster ride is a function of amusement park visit, then, if the price of amusement park entry falls",
      options: [
        "The demand for roller-coaster rides will rise and the demand curve will shift to right",
        "The demand for roller coaster ride cannot be predicted as it depends on the tastes of consumers for the ride",
        "There will be an expansion in the demand for roller coaster drive as it complementary",
        "None of the above"
      ],
      correctIndex: 0
    },
    {
      text: "The average income of residents of two cities A and B and the corresponding change in demand for two goods is given. Which of the following statements is true?",
      options: [
        "Both goods are normal goods in both cities A and B",
        "Good X is a normal good in both cities; good Y is an inferior good in city A",
        "Good X is a normal good in both cities; good Y is an inferior good in city B",
        "Need more information to make an accurate comment"
      ],
      correctIndex: 2
    },
    {
      text: "During a recession, economies experience increased unemployment and a reduced level of income. How would a recession likely to affect the market demand for new cars?",
      options: [
        "Demand curve will shift to the right.",
        "Demand curve will shift to the left",
        "Demand will not shift, but the quantity of cars sold per month will decrease.",
        "Demand will not shift, but the quantity of cars sold per month will increase."
      ],
      correctIndex: 1
    },
    {
      text: "Which of the following groups of goods have inelastic demand?",
      options: [
        "Salt, Smart Phone and Branded Lipstick",
        "School Uniform, Branded Goggles and Smart Phone",
        "Salt, School Uniform and Medicine",
        "Medicine, Branded Sports Shoes and Diamond ring"
      ],
      correctIndex: 2
    },
    {
      text: "If the price of a commodity raised by 12% and Ed is (-) 0.63, the expenditure made on the commodity by a consumer will _____________",
      options: ["Decrease","Increase","Remain same","Can’t say"],
      correctIndex: 0
    },
    {
      text: "During lockdown due to COVID-19, a consumer finds the vegetable vendors selling vegetables in the street have raised the prices of vegetables than usual prices. She will buy ____________ vegetables than/as her usual demand showing the demand of vegetables is ____________.",
      options: [
        "More, inelastic demand",
        "Less, elastic demand",
        "Same, inelastic demand",
        "Same, elastic demand"
      ],
      correctIndex: 2
    },
    {
      text: "Commodities such as prescribed medicines and salt have __________________ and hence, have an ___________________ demand.",
      options: [
        "Several substitutes, elastic",
        "Several substitutes, inelastic",
        "No close substitutes, inelastic",
        "No close substitutes, elastic"
      ],
      correctIndex: 2
    },
    {
      text: "Let slope of demand curve is (-) 0.6, calculate elasticity of demand when initial price is Rs. 30 per unit and initial quantity is 100 units of the commodity",
      options: ["0.5","5.55","-0.5","-0.18"],
      correctIndex: 1
    },
    {
      text: "Let Qx = 1500/ Px, the elasticity of demand of the good X when its price falls from Rs. 8 to Rs. 2 per unit, will be-",
      options: [
        "Greater than one",
        "Less than one",
        "Equal to one",
        "Can’t say"
      ],
      correctIndex: 2
    },
    {
      text: "Law of demand is a qualitative concept whereas price elasticity of demand is _____________.",
      options: [
        "Also qualitative concept",
        "Quantitative concept",
        "Quantitative and qualitative concept",
        "Neither qualitative nor quantitative concept"
      ],
      correctIndex: 1
    },
    {
      text: "The most crucial determinant of demand for an item is __________________________",
      options: [
        "Income of consumer",
        "Prices of other related goods",
        "Taste and preference of consumer",
        "Its own price"
      ],
      correctIndex: 3
    },
    {
      text: "The price of a piece of jewellery rises, the demand for it may also rise as consumers attach a ______________ to owning and displaying expensive items.",
      options: [
        "Money value",
        "Use value",
        "Snob value",
        "None of these"
      ],
      correctIndex: 2
    },
    {
      text: "With reference to Arc elasticity measures the responsiveness of demand _____________ on the demand curve",
      options: [
        "At one given point",
        "At intercepts on X-axis & Y-axis",
        "Between two points",
        "Any of the above"
      ],
      correctIndex: 2
    },
    {
      text: "In the above figure, DD1 is the demand curve of a commodity. There are two points on the demand curve i.e., A and B with (P, Q) as (10, 2) & (8, 3) respectively. If the initial point is A OR initial point is B, the price elasticity of demand will be –",
      options: [
        "Same in both cases by point method of price elasticity of demand",
        "Different in both cases by Arc method of price elasticity of demand",
        "Same in both cases by Arc method & different by point method of price elasticity of demand",
        "None of these"
      ],
      correctIndex: 2
    },
    {
      text: "Goods X and Y being independent goods, the cross price elasticity of demand (ignoring the sign) between them will be-",
      options: [
        "1 (unit elastic)",
        "Less than 1",
        "Greater than 1",
        "Zero"
      ],
      correctIndex: 3
    },
    {
      text: "‘Ceteris Paribus’ clause in Law of demand does not mean-",
      options: [
        "The price of the commodity does not change",
        "The price of substitutes does not change",
        "The income of consumer does not change",
        "The price of complementary goods does not change"
      ],
      correctIndex: 0
    },
    {
      text: "Demand for electricity is elastic because ——————.",
      options: [
        "It is very expensive",
        "It has a number of close substitutes",
        "It has alternative uses",
        "None of the above"
      ],
      correctIndex: 2
    },
    {
      text: "________ and ________ do not directly affect the demand curve",
      options: [
        "The price of related goods, consumer incomes",
        "Consumer incomes, tastes",
        "The costs of production, bank opening hours",
        "The price of related goods, preferences"
      ],
      correctIndex: 2
    },
    {
      text: "If consumers always spend 15 percent of their income on food, then the income elasticity of demand for food is _________.",
      options: ["1.50","1.15","1","0.15"],
      correctIndex: 2
    },
    {
      text: "The elasticity of substitution between two perfect substitutes is:",
      options: [
        "Zero",
        "Greater than zero",
        "Less than infinity",
        "Infinite"
      ],
      correctIndex: 3
    },
    {
      text: "In the case of a straight line demand curve meeting the two axes the price – elasticity of demand at the mid-point of the line would be:",
      options: ["0","1","1.5","2"],
      correctIndex: 1
    },
    {
      text: "Cross elasticity of demand between tea and coffee is:",
      options: ["Positive","Negative","Zero","Infinity"],
      correctIndex: 0
    },
    {
      text: "If a point on a demand curve of any commodity lies on X Axis, then price elasticity of demand of that commodity at that point will be __________",
      options: [
        "Infinite",
        "More than zero",
        "Less than zero",
        "Zero"
      ],
      correctIndex: 0
    },
    {
      text: "XYZ are three commodities where X and Y are complements whereas X and Z are substitutes. A shopkeeper sells commodity X at Rs. 40 per piece. At this price he is able to sell 100 pieces of X per month. After some time, he decreases the price of X to Rs. 20. Following the price decrease, he is able to sell 150 pieces of X per month, the demand for Y increases from 25 units to 50 units and the demand for commodity Z decreases from 150 to 75 units. The price elasticity of demand when the price of X decreases from Rs. 40 per piece to Rs. 20 per piece will be equal to:",
      options: ["1.5","1","1.66","0.6"],
      correctIndex: 2
    },
    {
      text: "The cross elasticity of monthly demand for Y when the price of X decrease from Rs. 40 to Rs. 20 is equal to:",
      options: ["2","-2","-1.5","1.5"],
      correctIndex: 0
    },
    {
      text: "The cross-elasticity of Z when the price of X decreases from 40 to 20 is equal to:",
      options: ["-0.6","0.6","-1","1"],
      correctIndex: 2
    },
    {
      text: "What can be said about price elasticity of demand for X?",
      options: [
        "Demand is unit elastic",
        "Demand is highly elastic",
        "Demand is perfectly elastic",
        "Demand is inelastic"
      ],
      correctIndex: 1
    },
    {
      text: "Suppose income of the residents of locality increase by 50% and the quantity of X commodity increases by 20%. What is income elasticity of demand for commodity X?",
      options: ["0.6","0.4","1.25","1.35"],
      correctIndex: 1
    },
    {
      text: "We can say that commodity X in economics is a/an",
      options: [
        "Luxury good",
        "Inferior Good",
        "Normal Good",
        "None of the above"
      ],
      correctIndex: 2
    },
    {
      text: "For Giffen goods, the Engel curve is:",
      options: [
        "Positive sloped",
        "Vertical",
        "Horizontal",
        "Negative sloped"
      ],
      correctIndex: 3
    },
    {
      text: "The Coefficient of Price elasticity of demand between two points on a demand curve is ____",
      options: [
        "Arc elasticity",
        "Point elasticity",
        "Price elasticity",
        "None of these"
      ],
      correctIndex: 0
    },
    {
      text: "When the demand curve is a rectangular hyperbola an increase in the price of the commodity causes the total expenditure of consumers of the commodity to:",
      options: [
        "Remain unchanged",
        "Increase",
        "Decrease",
        "Any of the above"
      ],
      correctIndex: 0
    },
    {
      text: "A movement along a curve rather than a shift in the curve can be measured by:",
      options: [
        "Cross elasticity of demand",
        "Income elasticity of demand",
        "Price elasticity of demand & Price elasticity of Supply",
        "None of these"
      ],
      correctIndex: 2
    },
    {
      text: "The Substitution effect will be stronger when-",
      options: [
        "The goods are closer substitutes",
        "There is lower cost of switching to the substitute good",
        "There is lower inconvenience while switching to the substitute good.",
        "All of these"
      ],
      correctIndex: 3
    },
    {
      text: "According to Hicks and Allen the demand curve slope downwards due to _____",
      options: [
        "Law of diminishing marginal utility",
        "Income effect and substitution effect",
        "Either (a) or (b)",
        "None of these"
      ],
      correctIndex: 1
    },
    {
      text: "If increasing railway fare increases revenue, then the demand for railway travel has a price elasticity of _____",
      options: [
        "Greater than 1",
        "1",
        "Greater than 0 but less than 1",
        "None of these"
      ],
      correctIndex: 2
    },
    {
      text: "The substitution effect works to encourage a consumer to purchase more of a product when the price of that product is falling because-",
      options: [
        "The consumer’s real income has increased.",
        "The consumer’s real income has decreased.",
        "The product is now relatively less expensive than before.",
        "Other products are now less expensive than before."
      ],
      correctIndex: 2
    },
    {
      text: "Demonstration effect, a term coined by _____________",
      options: [
        "Adam Smith",
        "James Duesenberry",
        "Alfred Marshall",
        "None of these"
      ],
      correctIndex: 1
    },
    {
      text: "“The increase in demand of a commodity due to the fact that others are also consuming the same commodity” is known as___________",
      options: [
        "Veblen effect",
        "Bandwagon effect",
        "Snob effect",
        "Demonstration effect"
      ],
      correctIndex: 1
    },
    {
      text: "A necessity is defined as a good having:",
      options: [
        "A positive income elasticity of demand",
        "A negative income elasticity of demand",
        "An income elasticity of demand between zero and 1.",
        "An income elasticity of more than 1."
      ],
      correctIndex: 2
    },
    {
      text: "Snob effect is explained as ______",
      options: [
        "It is a function of consumption of others",
        "It is a function of price",
        "Both (a) and (b)",
        "None of these"
      ],
      correctIndex: 1
    },
    {
      text: "As the consumer’s income increases, the demand for necessities of life will increase _________ to the increase in income",
      options: [
        "Less than proportionate",
        "More than proportionate",
        "Proportionate",
        "None of these"
      ],
      correctIndex: 0
    },
    {
      text: "The tendency of people to imitate the consumption pattern of other people is known as",
      options: [
        "Demonstration",
        "Bandwagon",
        "Prestige",
        "Veblen"
      ],
      correctIndex: 0
    },
    {
      text: "When the quantity of a commodity than an individual buyer demand falls in response to the growth of purchases by other buyers, such an effect",
      options: [
        "Bandwagon",
        "Snob",
        "Veblen",
        "Demonstration"
      ],
      correctIndex: 1
    },
    {
      text: "If the demand for petrol remains unchanged with rise in its price, it means petrol is a",
      options: [
        "Normal good",
        "Necessity",
        "Luxury good",
        "Giffen good"
      ],
      correctIndex: 1
    },
    {
      text: "The demand function is given as Q= 100 - 10P. Find the elasticity using point method when price is Rs. 5",
      options: ["2","-2","1","-1"],
      correctIndex: 1
    },
    {
      text: "A firm learns that the own price elasticity of a product it manufactures is 3.5. What should be the correct action for the firm if it wishes to raise its total revenue?",
      options: [
        "Lower the price because demand for the good is elastic",
        "Raise the price because demand for the product is elastic",
        "Raise the price because demand is elastic",
        "We need information in order to answer this question."
      ],
      correctIndex: 0
    },
    {
      text: "A consumer buys 80 units of a commodity at Rs. 4 per unit. When the price falls, he buys 100 units. If Ed = -1, the new price will be:",
      options: ["Rs. 3.5","Rs. 3","Rs. 2.5","Rs. 2"],
      correctIndex: 1
    },
    {
      text: "Goods which have fewer substitutes are:",
      options: [
        "Less elastic",
        "Unit elastic",
        "More elastic",
        "Perfectly elastic"
      ],
      correctIndex: 0
    },
    {
      text: "Price elasticity of Demand for addictive products like Cigarettes and alcohol would be",
      options: [
        "Greater than 1",
        "Less than 1",
        "Infinity",
        "One"
      ],
      correctIndex: 1
    },
    {
      text: "Ceteris paribus, what would be the impact on foreign exchange earnings for a given falling export prices, if the demand for the country's exports is inelastic?",
      options: [
        "Foreign Exchange Earnings decrease",
        "Foreign Exchange Earnings increase",
        "No effect on Foreign Exchange earnings",
        "None of the above"
      ],
      correctIndex: 0
    },
    {
      text: "If the co-efficient of cross elasticity of demand for X & Y is 2, it means that X and Y are:",
      options: [
        "Complementary goods",
        "Substitute goods",
        "Inferior goods",
        "Normal goods"
      ],
      correctIndex: 1
    },
    {
      text: "The demand for which type of goods is likely to be derived demand?",
      options: [
        "Consumer goods",
        "Non-durable consumer goods",
        "Non-durable producer goods",
        "Durable goods"
      ],
      correctIndex: 3
    },
    {
      text: "In case of unequal distribution of income in the country, the propensity to consume will be ...., and demand for Consumer Goods will be___",
      options: [
        "Higher; Higher",
        "Higher; Lower",
        "Lower; Higher",
        "Lower; Lower"
      ],
      correctIndex: 1
    },
    {
      text: "If the Consumers expect an Increase in Income in the future, its current demand will be ____",
      options: ["Decrease","Increase","No change","Nothing can be said"],
      correctIndex: 1
    },
    {
      text: "When Consumers feel that if the commodity is expensive, that it has got more utility, we are referring to—",
      options: [
        "Inferior goods",
        "Normal goods",
        "Conspicuous goods",
        "Giffen goods"
      ],
      correctIndex: 2
    },
    {
      text: "Giffen Goods are goods which:",
      options: [
        "Are considered inferior by consumers",
        "Occupy a substantial place in the consumers’ budget",
        "Both a. and b.",
        "None of the above"
      ],
      correctIndex: 2
    },
    {
      text: "Goods which are required for immediate or urgent consumption are:",
      options: [
        "Less elastic",
        "Unit elastic",
        "More elastic",
        "None of the above"
      ],
      correctIndex: 0
    },
    {
      text: "If the demand for the good is more elastic, the Demand curve will be:",
      options: [
        "Parallel to the X-axis",
        "Downward sloping to the right, flatter",
        "Downward sloping to the right, steeper",
        "Parallel to the y-axis"
      ],
      correctIndex: 1
    },
    {
      text: "What is the elasticity between midpoint & upper extreme point of a straight line demand curve?",
      options: ["Infinite","Zero",">1","<1"],
      correctIndex: 0
    },
    {
      text: "Total Expenditure of a consumer increases if:\n(i) Demand is elastic and price rises\n(ii) Demand is elastic and price falls\n(iii) Demand is inelastic and price rises\n(iv) Demand is inelastic and price falls",
      options: [
        "Only (ii)",
        "Only (iii)",
        "Both (i) and (iii)",
        "Both (ii) and (iii)"
      ],
      correctIndex: 1
    },
    {
      text: "What will be the Slope of Demand Curve when it shows the Cross Elasticity between two Complementary Goods?",
      options: ["Negative","Positive","Zero","Can’t say"],
      correctIndex: 0
    },
    {
      text: "Consumption of high-priced goods by status-seeking rich people for conspicuous consumption is called:",
      options: [
        "Snob effect",
        "Bandwagon effect",
        "Demonstration effect",
        "Veblen effect"
      ],
      correctIndex: 3
    },
    {
      text: "If the quantity demanded of coffee increased by 8% while the price of tea increased by 25%, the cross elasticity of demand between coffee and tea is:",
      options: ["-0.32","0.32","3.125","-3.125"],
      correctIndex: 1
    },
    {
      text: "Calculate the price elasticity of demand when the price increases from Rs. 20 to Rs. 22 and quantity demanded falls from 300 to 200 units (Midpoint method):",
      options: ["4.2","-4.2","4","-4"],
      correctIndex: 1
    },
    {
      text: "Mr. Z went to a stationery shop to buy pens. The price of a pen decreased from Rs. 5 to Rs. 3 per unit. If the price elasticity of demand for pens is 2.5 and the original quantity demanded for pens is 20, then what is the new quantity demanded?",
      options: ["10","40","30","20"],
      correctIndex: 2
    },
    {
      text: "Suppose the price elasticity of demand of a firm for its product is -1.2. If the price of the product is increased by 5%, then it is most probable that:",
      options: [
        "Both total revenue and profit would increase.",
        "Both total revenue and profit would decrease.",
        "Total revenue would decrease but profit may increase.",
        "Total revenue would increase but profit may decrease"
      ],
      correctIndex: 2
    },
    {
      text: "Mr. X and Mr. Y are rich rivals and, in a party, Mr. X wears an expensive dress and on seeing it Mr. Y who also has the same dress decided to reject the use of the same dress further. Rather Mr. Y will try to use an even more expensive one. Which effect affects Mr. Y?",
      options: [
        "Bandwagon Effect",
        "Demonstration Effect",
        "Snob Effect",
        "Veblen Effect"
      ],
      correctIndex: 2
    },
    {
      text: "If the income elasticity of a specific types of goods is greater than one, what does it suggest about the goods?",
      options: [
        "It is an inferior good",
        "It is a normal good",
        "It is a necessity good",
        "It is a luxury good"
      ],
      correctIndex: 3
    },
    {
      text: "The demand function of a product X (in kg.) is expressed as Q = 1000-50P, where Q is the quantity demanded and P is the price of the product. When price of X is 10 per kg., it's price elasticity will be:",
      options: ["-1","1","-2","2"],
      correctIndex: 2
    },
    {
      text: "The price of 1 kg. of tea is Rs. 50. At this price, 10kg of tea is demanded. If the price of coffee rises from Rs. 30 to Rs. 40 per kg, the quantity demanded of tea rises from 10kg to 15kg. What will be the cross price elasticity of tea?",
      options: ["+1","-1.5","+1.5","-1"],
      correctIndex: 2
    },
    {
      text: "If change in quantity demanded is 60% and change in advertisement expenditure is 20% then what will be the advertisement elasticity?",
      options: ["3","0.33","6","20"],
      correctIndex: 0
    },
    {
      text: "When some people start investing money in share market then many people start following the same without considering its advantages and disadvantages is an example of:",
      options: [
        "Veblen effect",
        "Bandwagon effect",
        "Snob effect",
        "Sheep effect"
      ],
      correctIndex: 1
    },
    {
      text: "‘Ceteris Paribus’ is a Latin phrase that generally means:",
      options: [
        "All other things being equal",
        "An inverse relationship",
        "Income of consumers",
        "Tastes and preferences of consumers"
      ],
      correctIndex: 0
    },
    {
      text: "The slope of a demand curve is:",
      options: [
        "ΔQ / ΔP",
        "ΔP / ΔQ",
        "- ΔQ / ΔP",
        "- ΔQ / ΔP"
      ],
      correctIndex: 2
    },
    {
      text: "A Shopkeeper sells two commodities A and B, which are close substitute of each other. It is observed that when the price of commodity A rises by 20%, the demand for B increases by 30%. What is the cross price elasticity for commodity B against the price of commodity A?",
      options: ["+1","-1","+1.5","-1.5"],
      correctIndex: 2
    },
    {
      text: "An expectation that price will fall in future will lead to:",
      options: [
        "A downward movement along the same demand curve",
        "An upward movement along the same demand curve",
        "Rightward shift of demand curve",
        "Leftward shift of demand curve"
      ],
      correctIndex: 3
    },
    {
      text: "A consumer buys 100 units of a good at a price of Rs. 6 per unit. Suppose price elasticity of demand is -3. At what price will he buy 80 units?",
      options: ["Rs. 5.8","Rs. 6.2","Rs. 6.4","Rs. 6.75"],
      correctIndex: 1
    },
    {
      text: "If total revenue of good increases with an increase in its price, demand for the good is said to be:",
      options: [
        "Elastic",
        "Unit elastic",
        "Inelastic",
        "Infinitely elastic"
      ],
      correctIndex: 2
    },
    {
      text: "Which of the following statement is not true while determining price elasticity of demand?",
      options: [
        "Goods which have close or perfect substitutes, have elastic demand curves.",
        "The greater the proportion of income spent on a commodity; generally, the lesser will be its elasticity of demand.",
        "Necessities are generally price inelastic.",
        "The more possible uses of a commodity, greater will be its price elasticity."
      ],
      correctIndex: 1
    },
    {
      text: "Commodities for which the quantity demanded rises only up to a certain level of income and decreases with an increase in income beyond this level are called:",
      options: [
        "Normal goods",
        "Inferior goods",
        "Essential goods",
        "Luxury goods"
      ],
      correctIndex: 1
    },
    {
      text: "Highly priced goods are consumed by status seeking rich people to satisfy their need for conspicuous consumption. This is called:",
      options: [
        "Demonstration effect",
        "Bandwagon effect",
        "Snob effect",
        "Veblen effect"
      ],
      correctIndex: 3
    }
  ]
} //New Chaptsr from here.
    ]
  },

  {
    id: "QA",
    name: "Maths",
    chapters: [
      {
        id: "qa_ch1",
        name: "Basics of Accounting",
        questions: [
          {
            text: "Which is real account?",
            options: ["Cash", "Salary", "Capital", "Sales"],
            correctIndex: 0
          }
        ]
      }
    ]
  }
];
