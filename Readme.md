# Automating setup :

1. **With Node js:**

`npm i`

`npm start`

1. **With docker Compose:**

`docker-compose up`

- **Options** are not fully random, they were generated according to the length of the correct answer;

  eg: 6678

Options would be [&#39;7789&#39;,&#39;6678&#39;,&#39;8986&#39;,&#39;7856&#39;];

One more thing is generated option may contain zero at the begining eg: 0065 then ofcourse output is 65. More checks were not implemented.

**Code** is deployed to Linux (Ubuntu) Server as an IBM cloud.

# How did you go about creating various options:

First, I created a function that can generate a number according to the following parameters:

- Length of the generated number is should be equal to the demand

If its flag is true:

If the number is Minuend:

- The first letter is always more then 5. So, that Minuend should be never mess then subtrahend.

- Remaining numbers should be less then 5, So that each time there should be bargain from previous one but still should end up with first number because overall the first number is greater then 5 and ofcourse the whole number is always greater then subtrahend that prevents negative result.

If the flag is false

If the number is Minuend:

- The first letter is always more then 5. So, that Minuend should be never mess then subtrahend.

- Remaining numbers should be morethen 5, So that each time there should not be bargain from previous one but still should end up with first number because overall the first number is greater then 5 and ofcourse the whole number is always greater then subtrahend that prevents negative result.

**Reason of choosing 5 as a point:** Because I found that Number between 0-9 is 4 but still generally we ignoring number 0 to be get placed with certain criteria like first digit.

Hence I have to choose a number between 1-9. that is 4.5.

Math.ceil will give 4.5 is 5 &amp;&amp; Math.floor will give 4.5 as 4.

The point which we have to keep in mind is that the probability of getting the required number should be equally high to get better optimisation.

First letter should always be the bigger number is the requirement. And concatenation of the entite figure will not begin until we will get first number.

Probability of getting numbers less then 4 without 0 is [Number between 1-3]: 30%.

Probability of getting numbers less then 5 without 0 is [Number between 1-4]: 40%.

I opted 40% of probability for this. Ofcourse it can be change or can be made dynamically; But to save time I opted 5 as a final.

After getting Minuend and subtrahend, I calculated the length of the Correct Answer and according to its length I generated options.

Intent:-

Generated Four random numbers according to above strategy and then used .sort() function to shuffle it with function Math.random() - 0.5
