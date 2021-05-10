import { useState } from 'react';

const initialSteps = [
    { step: 1, complete: false, task: "Soak Lentils: Rinse lentils and leave to soak in plenty of water for 1 hour. Drain in colander." },
    { step: 2, complete: false, task: "Heat ghee/oil in a heavy based saucepan over high heat. Add green chillies and fry for a minute until starting to blister." },
    { step: 3, complete: false, task: "Add onions and fry until softened." },
    { step: 4, complete: false, task: "Lower heat to medium, add garlic, ginger and curry leaves. Cook for 1 minute until garlic starts to turn golden and smells amazing." },
    { step: 5, complete: false, task: "Add tomatoes and cumin, cook until tomatoes start to break down and thicken to a paste - about 2 minutes." },
    { step: 6, complete: false, task: "Add lentils, water, tumeric and salt. Stir, bring to simmer, cover and simmer gently for 1 hour. Stir two or three times during the hour." },
    { step: 7, complete: false, task: "Remove lid and simmer gently for 30 minutes to thicken, stirring every now and then. The dal is ready when it has a consistency like porridge - some lentils should be intact but some have broken down to thicken the sauce." },
    { step: 8, complete: false, task: "Stir through garam masala at the end. Adjust salt if desired." },
    { step: 9, complete: false, task: "Pour over Tadka, if using, and stir through." },
    { step: 10, complete: false, task: "Serve Dal over rice, garnished with a sprig of coriander if desired." }
];

const completeStyle = { color: "#D3D3D3", textDecoration: "line-through" };

function Recipe() {

    const [steps, setSteps] = useState(initialSteps);

    const handleCompletion = (stepNumber) => {
        setSteps(steps.map(item => {
            let clone = { ...item };
            if (clone.step === stepNumber) {
                clone.complete = true;
            }
            return clone;
        }));
    };

    const nextStepIndex = steps.findIndex(i => !i.complete);

    return (
        <ol>
            {steps.map(step => {
                return <li style={step.complete ? completeStyle : null} key={step.step}>
                    {step.task}
                    {nextStepIndex + 1 === step.step &&
                        <button onClick={() => handleCompletion(step.step)}>Complete</button>}
                </li>
            })}
        </ol>
    );
}

export default Recipe;