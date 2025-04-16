const skills = [
    {
        id: 1,
        skillCategory: "general",
        characteristicUsed: "INT",
        skillName: "Alchemy",
        isCareer: false,
        rank: 0
    },
    {
        id: 2,
        skillCategory: "general",
        characteristicUsed: "INT",
        skillName: "Astrocartography",
        isCareer: false,
        rank: 0
    },
    {
        id: 3,
        skillCategory: "general",
        characteristicUsed: "BR",
        skillName: "Athletics",
        isCareer: false,
        rank: 0
    },
    {
        id: 4,
        skillCategory: "general",
        characteristicUsed: "INT",
        skillName: "Computers",
        isCareer: false,
        rank: 0
    },
    {
        id: 5,
        skillCategory: "general",
        characteristicUsed: "PR",
        skillName: "Cool",
        isCareer: false,
        rank: 0
    },
    {
        id: 6,
        skillCategory: "general",
        characteristicUsed: "AG",
        skillName: "Coordination",
        isCareer: false,
        rank: 0
    },
    {
        id: 7,
        skillCategory: "general",
        characteristicUsed: "WILL",
        skillName: "Discipline",
        isCareer: false,
        rank: 0
    },
    {
        id: 8,
        skillCategory: "general",
        characteristicUsed: "AG",
        skillName: "Driving",
        isCareer: false,
        rank: 0
    },
    {
        id: 9,
        skillCategory: "general",
        characteristicUsed: "INT",
        skillName: "Mechanics",
        isCareer: false,
        rank: 0
    },
    {
        id: 10,
        skillCategory: "general",
        characteristicUsed: "INT",
        skillName: "Medicine",
        isCareer: false,
        rank: 0
    },
    {
        id: 11,
        skillCategory: "general",
        characteristicUsed: "INT",
        skillName: "Operating",
        isCareer: false,
        rank: 0
    },
    {
        id: 12,
        skillCategory: "general",
        characteristicUsed: "CUN",
        skillName: "Perception",
        isCareer: false,
        rank: 0
    },
    {
        id: 13,
        skillCategory: "general",
        characteristicUsed: "AG",
        skillName: "Piloting",
        isCareer: false,
        rank: 0
    },
    {
        id: 14,
        skillCategory: "general",
        characteristicUsed: "BR",
        skillName: "Resilience",
        isCareer: false,
        rank: 0
    },
    {
        id: 15,
        skillCategory: "general",
        characteristicUsed: "AG",
        skillName: "Riding",
        isCareer: false,
        rank: 0
    },
    {
        id: 16,
        skillCategory: "general",
        characteristicUsed: "CUN",
        skillName: "Skulduggery",
        isCareer: false,
        rank: 0
    },
    {
        id: 17,
        skillCategory: "general",
        characteristicUsed: "IAGNT",
        skillName: "Stealth",
        isCareer: false,
        rank: 0
    },
    {
        id: 18,
        skillCategory: "general",
        characteristicUsed: "CUN",
        skillName: "Streetwise",
        isCareer: false,
        rank: 0
    },
    {
        id: 19,
        skillCategory: "general",
        characteristicUsed: "CUN",
        skillName: "Survival",
        isCareer: false,
        rank: 0
    },
    {
        id: 20,
        skillCategory: "general",
        characteristicUsed: "WILL",
        skillName: "Vigilance",
        isCareer: false,
        rank: 0
    },
    {
        id: 21,
        skillCategory: "magic",
        characteristicUsed: "INT",
        skillName: "Arcana",
        isCareer: false,
        rank: 0
    },
    {
        id: 22,
        skillCategory: "magic",
        characteristicUsed: "WILL",
        skillName: "Divine",
        isCareer: false,
        rank: 0
    },
    {
        id: 23,
        skillCategory: "magic",
        characteristicUsed: "CUN",
        skillName: "Primal",
        isCareer: false,
        rank: 0
    },
    {
        id: 24,
        skillCategory: "combat",
        characteristicUsed: "BR",
        skillName: "Brawl",
        isCareer: false,
        rank: 0
    },
    {
        id: 25,
        skillCategory: "combat",
        characteristicUsed: "AG",
        skillName: "Gunnery",
        isCareer: false,
        rank: 0
    },
    {
        id: 26,
        skillCategory: "combat",
        characteristicUsed: "BR",
        skillName: "Melee",
        isCareer: false,
        rank: 0
    },
    {
        id: 27,
        skillCategory: "combat",
        characteristicUsed: "BR",
        skillName: "Melee-Light",
        isCareer: false,
        rank: 0
    },
    {
        id: 28,
        skillCategory: "combat",
        characteristicUsed: "BR",
        skillName: "Melee-Heavy",
        isCareer: false,
        rank: 0
    },
    {
        id: 29,
        skillCategory: "combat",
        characteristicUsed: "AG",
        skillName: "Ranged",
        isCareer: false,
        rank: 0
    },
    {
        id: 30,
        skillCategory: "combat",
        characteristicUsed: "AG",
        skillName: "Ranged-Heavy",
        isCareer: false,
        rank: 0
    },
    {
        id: 31,
        skillCategory: "combat",
        characteristicUsed: "AG",
        skillName: "Ranged-Light",
        isCareer: false,
        rank: 0
    },
    {
        id: 32,
        skillCategory: "social",
        characteristicUsed: "PR",
        skillName: "Charm",
        isCareer: false,
        rank: 0
    },
    {
        id: 33,
        skillCategory: "social",
        characteristicUsed: "WILL",
        skillName: "Coercion",
        isCareer: false,
        rank: 0
    },
    {
        id: 34,
        skillCategory: "social",
        characteristicUsed: "CUN",
        skillName: "Deception",
        isCareer: false,
        rank: 0
    },
    {
        id: 35,
        skillCategory: "social",
        characteristicUsed: "PR",
        skillName: "Leadership",
        isCareer: false,
        rank: 0
    },
    {
        id: 36,
        skillCategory: "social",
        characteristicUsed: "PR",
        skillName: "Negotiation",
        isCareer: false,
        rank: 0
    },
    {
        id: 37,
        skillCategory: "knowledge",
        characteristicUsed: "INT",
        skillName: "Knowledge",
        isCareer: false,
        rank: 0
    }
]

let skillsList = "";

const SkillCats = [...new Set(skills.map(item=>item.skillCategory))]

function SkillCard() {SkillCats.map((data)=>skills.filter(item=>item.skillCategory===data).map((skill,index,array)=>{
    if (index ===0){
        skillsList += `
        <table class="skill-table">
            <tr>
                <th colspan="4">${data}</th>
            </tr>
            <tr>
                <th>Skill Name</th>
                <th>Char</th>
                <th>Is Career</th>
                <th>Rank</th>
            </tr>`
            } 
    skillsList += `<tr>
        <td>${skill.skillName}</td>
        <td>${skill.characteristicUsed}</td>
        <td><input type="checkbox" value=${skill.isCareer} data-id=${skill.id} class="career-checkbox"></td>
        <td> <select name="${skill.rank}">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select></td>
    </tr>`
    if (index === array.length-1){
        skillsList+=`</table>`
    }
    
}))}

 

// function SkillCard() {
//     skills.map((data,index) =>
//         {

//             if (index ===0){
//                 skillsList += `<tr>
//             <th>${data.skillCategory}</th>
//             <th>${data.skillName}</th>
//             <th>${data.characteristicUsed}</th>
//             <th>${data.isCareer}</th>
//             <th>${data.rank}</th>
//             </tr>`
//             } else {skillsList += `<tr>
//                 <td>${data.skillName}</td>
//                 <td>${data.characteristicUsed}</td>
//                 <td>${data.isCareer}</td>
//                 <td>${data.rank}</td>
//                 </tr>`}

            
//             // `<div class=skillsList>
//             // <h3${data.skillCategory}</h3>
//             // <p>${data.skillName}</p>
//             // <p>${data.characteristicUsed}</p>
//             // <p>${data.isCareer}</p>
//             // <p>${data.rank}</p>
//             // </div>`
//         })

//     document.getElementById("skills").innerHTML = skillsList;
// }

SkillCard();
document.getElementById("skills").innerHTML = skillsList;

const characteristics = [
    {
        charName: "Brawn",
        charRank: 0
    },
    {
        charName: "Agility",
        charRank: 0
    },
    {
        charName: "Cunning",
        charRank: 0
    },
    {
        charName: "Intellect",
        charRank: 0
    },
    {
        charName: "Willpower",
        charRank: 0
    },
    {
        charName: "Presence",
        charRank: 0
    }
]

let characteristicsList = "";
 
function CharacteristicSetZero() {
    characteristics.map((data) => {
        characteristicsList += `<div class="characteristics">
        <h2>${data.charName}</h2>
        <p>${data.charRank}</p>
        </div>`
    })

    document.getElementById("characteristics").innerHTML = characteristicsList;
}

CharacteristicSetZero();

let checklist = document.getElementsByClassName("career-checkbox");
for (let i = 0; i < checklist.length; i++){
    checklist[i].addEventListener("change",(e)=>{
        let tempID = parseInt(e.target.dataset.id);
        let skillUpdate = skills.find(item=>item.id===tempID);
        skillUpdate.isCareer = e.target.checked;
        // console.log(skills)
    })
}