import React, { useState } from "react";
import ManImage from "../images/man.svg"
import RobotImage from "../images/robot.svg"
import CallImage from "../images/call.png"
import Call2Image from "../images/call2.png"
import ChatIcon from "../images/chatIcon.svg"
const chatScript = [
    
    { tag: "rash", question: "Are you concerned about a rash?", answer: "Rashes can be caused by allergies, infections, heat, or irritants." },
    { tag: "fever", question: "Are you concerned about fever?", answer: "Fever is an increase in body temperature, often due to an infection." },
    { tag: "flu", question: "Are you concerned about flu?", answer: "The flu is a contagious respiratory illness caused by influenza viruses." },
    { tag: "headache", question: "Are you concerned about headaches?", answer: "Headaches can be caused by stress, tension, migraines, or other medical conditions." },
    
    // Fever concern
    { tag: "fever", question: "How can I reduce fever at home?", answer: "Take acetaminophen or ibuprofen, stay hydrated, and rest. Use a cool compress." },
    { tag: "fever", question: "When should I see a doctor for a fever?", answer: "If the fever is over 103°F, lasts more than three days, or has severe symptoms." },
    { tag: "fever", question: "What are common causes of fever?", answer: "Infections, heat exhaustion, certain inflammatory conditions, and medications." },
    { tag: "fever", question: "Can dehydration cause fever?", answer: "Yes, severe dehydration can lead to an elevated body temperature." },
    { tag: "fever", question: "What should I avoid if I have a fever?", answer: "Avoid heavy clothing, alcohol, and strenuous activities to prevent overheating." },
    { tag: "fever", question: "How can I monitor my fever?", answer: "Use a digital thermometer to check your temperature regularly." },
    { tag: "fever", question: "What fluids are best for fever?", answer: "Water, electrolyte solutions, and clear broths help maintain hydration." },
    { tag: "fever", question: "Is it safe to exercise with a fever?", answer: "No, rest is recommended until your fever subsides to avoid further health issues." },
    { tag: "fever", question: "Can stress cause a fever?", answer: "Stress itself doesn’t cause a fever, but it can weaken your immune system." },
  
    // Flu concern
    { tag: "flu", question: "What are common symptoms of the flu?", answer: "Fever, chills, muscle aches, cough, congestion, runny nose, headaches, and fatigue." },
    { tag: "flu", question: "How can I treat flu symptoms at home?", answer: "Rest, stay hydrated, take OTC medications for fever and aches, and use a humidifier." },
    { tag: "flu", question: "When should I see a doctor for the flu?", answer: "If you have difficulty breathing, chest pain, persistent fever, or severe dehydration." },
    { tag: "flu", question: "Can the flu be prevented?", answer: "Getting a yearly flu vaccine, frequent handwashing, and avoiding close contact with sick people." },
    { tag: "flu", question: "How is the flu virus spread?", answer: "Through droplets from coughs, sneezes, and close contact with an infected person." },
    { tag: "flu", question: "What are antiviral medications?", answer: "Medications prescribed to reduce the severity and duration of flu symptoms." },
    { tag: "flu", question: "Can you get the flu from the flu vaccine?", answer: "No, flu vaccines do not cause the flu. They help your body build protection." },
    { tag: "flu", question: "What is the difference between cold and flu?", answer: "Flu symptoms are usually more severe and sudden than those of a common cold." },
    { tag: "flu", question: "Can children and elderly get the flu shot?", answer: "Yes, the flu vaccine is recommended for everyone over 6 months of age." },
  
    // Headache concern
    { tag: "headache", question: "When should I see a doctor for a headache?", answer: "If your headache is severe, persistent, or has symptoms like vision changes, fever, or stiff neck." },
    { tag: "headache", question: "What are some home remedies for a headache?", answer: "Rest in a dark, quiet room, apply a cool cloth to your forehead, stay hydrated, and take OTC pain relievers." },
    { tag: "headache", question: "Can dehydration cause headaches?", answer: "Yes, dehydration is a common cause of headaches. Drink plenty of fluids." },
    { tag: "headache", question: "How can I prevent headaches?", answer: "Maintain a healthy lifestyle with regular sleep, hydration, balanced diet, and stress management." },
    { tag: "headache", question: "What foods can trigger headaches?", answer: "Certain foods like aged cheese, processed meats, alcohol, and caffeine can trigger headaches." },
    { tag: "headache", question: "Is it common to have headaches during pregnancy?", answer: "Yes, hormonal changes can cause headaches during pregnancy. Consult your doctor for safe treatments." },
    { tag: "headache", question: "Can lack of sleep cause headaches?", answer: "Yes, inadequate sleep is a common headache trigger. Aim for 7-9 hours of sleep per night." },
    { tag: "headache", question: "What are the symptoms of a migraine?", answer: "Severe headache, nausea, sensitivity to light and sound, and sometimes visual disturbances." },
    { tag: "headache", question: "Can stress cause headaches?", answer: "Yes, stress is a common trigger for tension headaches and migraines." },
  
    // Rash concern
    { tag: "rash", question: "Are you concerned about a rash?", answer: "Rashes can be caused by allergies, infections, heat, or irritants." },
    { tag: "rash", question: "What should I do if I have a rash?", answer: "Keep the area clean and dry, avoid scratching, and apply a soothing lotion. Consult a doctor if severe." },
    { tag: "rash", question: "What are common causes of skin rashes?", answer: "Allergic reactions, infections, heat, and certain medical conditions can cause rashes." },
    { tag: "rash", question: "Can stress cause a rash?", answer: "Yes, stress can trigger or worsen certain types of skin rashes." },
    { tag: "rash", question: "How can I prevent rashes?", answer: "Avoid known irritants, keep skin clean and dry, and use hypoallergenic products." },
    { tag: "rash", question: "When should I see a doctor for a rash?", answer: "If the rash is severe, painful, spreading, or accompanied by fever or other symptoms." },
    { tag: "rash", question: "Can diet affect skin rashes?", answer: "Yes, some food allergies and intolerances can cause or exacerbate skin rashes." },
    { tag: "rash", question: "What over-the-counter treatments help with rashes?", answer: "Hydrocortisone cream, antihistamines, and moisturizing lotions can help." },
    { tag: "rash", question: "Can new medications cause a rash?", answer: "Yes, some medications can cause allergic reactions leading to skin rashes. Consult your doctor if this happens." },
    { tag: "rash", question: "What is contact dermatitis?", answer: "A type of rash caused by direct contact with an irritant or allergen, resulting in red, itchy skin." },
  ];
  
const ChatBot = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [chatOpen, setChatOpen] = useState(false);
  const [concern, setConcern] = useState();
  return (
    <div className="fixed bottom-5 right-5 ">
      <div className="flex justify-end">
      <button
        className={`transition-all  duration-500 ${
          chatOpen ? "opacity-0" : "opacity-100"
        }`}
        onClick={() => {
          setChatOpen(true);
        }}
      >
        <img src={ChatIcon} alt="chat icon" className="max-w-16 lg:max-w-20"/>
      </button>
      </div>
      <div
        className={`flex flex-col drop-shadow-2xl rounded-lg overflow-hidden border-[1px] border-slate-300 transition-all duration-500  w-80 ${
          chatOpen ? "h-96  opacity-100 pointer-events-auto " : "h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex justify-between p-2 overflow-hidden bg-[#2F87EE] text-white font-bold">
          <div>Chat</div>
          <div className="cursor-pointer"
            onClick={() => {
              setChatOpen(false);
            }}
          >
            X
          </div>
        </div>
        <div className="bg-white chat text-white text-base w-full h-full p-2 overflow-y-auto flex flex-col gap-4">
          {chatHistory.length > 0 &&
            chatHistory.map((item) => {
              return (
                <div className="flex flex-col w-full gap-1">
                  <div className="flex gap-2 items-start justify-end ">
                    
                    <div className="p-1 text-right bg-slate-400 rounded-lg w-fit">
                      {item.question}
                    </div>
                    <div className="rounded-full bg-blue-500 size-8 p-1 flex justify-center items-center">
                    <img src={ManImage} alt="man image" className="w-full h-full object-contain"/>
                    </div>
                  </div>
                  <div className="flex justify-start items-start gap-2 ">
                  <div className="rounded-full bg-blue-500 size-8 p-1 flex justify-center items-center">
                    <img src={RobotImage} alt="man image" className="w-full h-full object-contain"/>
                    </div>
                    <div className="p-1 bg-blue-400 rounded-lg w-fit">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          {concern && <div className="w-full h-[2px] my-3 bg-slate-400 rounded-full min-h-[2px]"></div>}
          <div className="flex flex-col gap-[6px] items-end text-white text-base">
            {chatScript
              .filter((item) => {
                if (!(chatHistory.indexOf(item) >= 0) ) {
                  if(!concern){
                      return item;
                  }else if(concern === item.tag){
                    return item
                  }
                }
              })
              .slice(0, concern?3:4)
              .map((item) => {
                return (
                  <div
                    onClick={() => {
                     setConcern(item.tag);
                      setChatHistory([...chatHistory, item]);
                    }}
                    className="p-1 cursor-pointer bg-slate-400 text-right rounded-lg w-fit"
                  >
                    {item.question}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
