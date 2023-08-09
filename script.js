const jokeDiv = document.getElementById('joke');
const getJokeBtn = document.getElementById('getJokeBtn');

const jokes = [
    "Santa: Tumhari biwi ghar pe kaise maan leti hai?\nBanta: Mere paas ek aisa formula hai, 'Sorry baby, main kuch dinon ke liye busy hoon.'",
    "Ek doctor ne apne patient se pucha, 'Kaise aana hua yeh batao.'\nPatient: 'Auto se.'\nDoctor: 'No, I mean aapko yahaan kaise aana hua?'\nPatient: '2 minute, ek aur auto bulata hoon.'",
    "Girlfriend: Tumhara favorite movie kaunsi hai?\nBoyfriend: 'Aapke bina wali.'",
    "Teacher: Tumne homework kyun nahi kiya?\nStudent: 'Teacher, mera dog ate my homework.'\nTeacher: 'Tere paas toh dog hi nahi hai.'\nStudent: 'Teacher, woh hi khane gaya hai.'",
    "Ek ladka ek ladki se milne gaya, toh woh uske paas gaya aur bola, 'Aaj maine suna hai ki aap bimaar ho.'\nLadki: 'Haan, maine bhi yahi suna hai.'",


    "Wife: Tum itne late kyun aa rahe ho?\nHusband: 'Woh traffic tha.'\nWife: 'Oh, toh woh traffic waala tumhara dost hai jo hamesha mujhse milne aata hai.'",
    "Ladka: Tumhare paas aisa kya hai jo mere paas nahi hai?\nLadki: 'Mere paas woh cheez hai jo tum chahte ho.'",
    "Dukandar: Aapne yeh coat toh 5 saal pehle kharida tha, phir aaj tak pehna nahi.\nCustomer: 'Haan, isme ek tag laga hua hai jahaan 'Made in Future' likha hai.'",
    "Boy: Tum meri khushi ho.\nGirl: 'Arre, main toh keh rahi thi ki tumhe mujhse khushi milti hai ya nahi.'",
    "Santa ne apni friend se kaha, 'Maine suna hai ki tumhara beta scientist ban gaya hai?'\nBanta: 'Haan, woh toh bada intelligent bacha hai.'\nSanta: 'Toh kya banega?'\nBanta: 'Baccha.'",
    "Tumhara sense of humor toh waisa hi hai jaise Monday ka din - missing!",
    "Kuch log dosti mein jaan dena chahte hain, aur kuch toh dosti mein jeans.",


    "Student: Sir, maine aapko email kiya tha par aapne reply nahi kiya.\nProfessor: 'Email toh maine bhi send kiya tha, par kisi aur professor ko.'",
    "Shaadi ke baad husband apni wife se: 'Maine pehle kyun nahi dekha ki tu khana itna achha banati hai?'\nWife: 'Arre, main bhi pehle kyun nahi dekhi ki tu khata itna.'",
    "Girlfriend: Tumne mera wait kyun nahi kiya?\nBoyfriend: 'Main tumhe hello ki tarah wait nahi karta.'",
    "Teacher: Tumne homework nahi kiya?\nStudent: 'Haan, maine yeh soch kar ki aap kuch naya bata doge.'",
    "Husband apni wife se: 'Main tumhe aaj bhi waise hi pyaar karta hoon jaise pehle karta tha.'\nWife: 'Aur maine bhi waisa hi suna hai.'",
    "Santa: Aaj maine dosto se milke kaha, 'Mujhe ab waqt nahi milta.'\nBanta: 'Aur phir?'\nSanta: 'Phir kya, sabne hans ke kaha, 'Tera yeh time kabse chhota ho gaya?''",

 





   
    
];

getJokeBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    jokeDiv.textContent = jokes[randomIndex];
});
