/*
'''
❓ PROMPT
Given an input dictionary mapping Fellows (as string names) to skill ratings, return true if you're able to pair up Fellows with matching skill ratings with no Fellows leftover.

Example(s)
skillMap = {"oliver": 3, "pixel": 3, "pinky": 5, "tobey": 5}
canMatchFellows(skillMap) == True

skillMap = {"oliver": 3, "pixel": 4, "pinky": 5, "tobey": 5}
canMatchFellows(skillMap) == False
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function canMatchFellows(skillMap) {
def canMatchFellows(skillMap: dict) -> bool:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/




let skillMap = { "oliver": 3, "pixel": 3, "pinky": 5, "tobey": 5 };
console.log(canMatchFellows(skillMap === true));

skillMap = { "oliver": 3, "pixel": 4, "pinky": 5, "tobey": 5 };
console.log(canMatchFellows(skillMap) == false);

skillMap = { "oliver": 3, "pixel": 3, "pinky": 3 };
console.log(canMatchFellows(skillMap) == false);

skillMap = { "oliver": 3, "pixel": 3, "pinky": 5, "tobey": 5, "paavo": 1 };
console.log(canMatchFellows(skillMap) == false);

skillMap = { "oliver": 3, "pixel": 3, "pinky": 5, "tobey": 5, "paavo": 1, 'Meow': 2 };
console.log(canMatchFellows(skillMap === false));

skillMap = { "oliver": 3, "pixel": 3, "pinky": 3, "tobey": 3 };
console.log(canMatchFellows(skillMap) == true);

console.log(canMatchFellows({ "oliver": 1 }) == false);

console.log(canMatchFellows({}) == true);