// products.ts
export interface Product {
  id: number;
  name: string;
  src: string;
  details: string;
  keyIngredients?: string[];
  keyBenefits?: string[];
}

export const products: Product[] = [
  {
    id: 1, name: 'Better Cal-D tablet', src: './assets/products/Better-Cal-DTab.jpg', details: 'Better Cal-D tablet is a combination of calcium citrate with vitamin D3 and minerals like zinc and magnesium. Calcium prevents low blood calcium levels in people who do not get enough calcium from their diets. Calcium is important for the growth and development of bones. Vitamin D3 is used in the absorption of calcium in the blood. Vitamin D3 helps process essential bodily minerals, like calcium and phosphorus. Lack of vitamin D3 results in bone weakening, bone pain, and skin diseases. ',
    keyIngredients: [
      "Calcium",
      "Vitamin D3",
      "Magnesium",
      "Zinc"
    ],
    keyBenefits: [
      "It is a nutritional supplement which can be taken by people who have low levels of calcium in their blood.",
      "It is used in elderly people to keep bones healthy and strong and is even effective in chronic arthritis and osteoporosis.",
      "Vitamin D3 helps in the absorption of calcium in the blood."
    ]


  },
  {
    id: 2, name: 'Better Cal-D suspension', src: './assets/products/Better-Cal-D Syrup-new.jpg', details: 'Better Cal-D suspension is a combination of calcium citrate with vitamin D3 and minerals like zinc and magnesium. Calcium prevents low blood calcium levels in people who do not get enough calcium from their diets. Calcium is important for the growth and development of bones. Vitamin D3 is used in the absorption of calcium in the blood. Vitamin D3 helps process essential bodily minerals, like calcium and phosphorus. Lack of vitamin D3 results in bone weakening, bone pain, and skin diseases. ',
    keyIngredients: [
      "Calcium",
      "Vitamin D3",
      "Zinc",
      "Magnesium"
    ],
    keyBenefits: [
      "It is a nutritional supplement which can be taken by people who have low levels of calcium in their blood.",
      "It is used in elderly people to keep bones healthy and strong and is even effective in chronic arthritis and osteoporosis.",
      "Vitamin D3 helps in the absorption of calcium in the blood."
    ]
  },
  {
    id: 3, name: 'Mrofer XT Total', src: './assets/products/Myrofer-XT-Total.jpg', details: 'Mrofer XT Total contains Ferrous Ascorbate(iron), Folic acid, Methylcobalamin, and Zinc which may be useful for anaemia. It may support iron levels in the body during pregnancy, blood loss, or iron deficiency.',
    keyIngredients: [
      "Ferrous Ascorbate",
      "Folic acid",
      "Methylcobalamin",
      "Zinc Sulphate Monohydrate"
    ],
    keyBenefits: [
      "Iron may help transport oxygen throughout the body and maintain red blood cells.",
      "Folic acid may support rapid cell division and growth and is essential for healthy red blood cells.",
      "Methylcobalamin may promote the initiation and maturation of blood cells.",
      "Zinc is vital during pregnancy to support the body."
    ]
  },
  {
    id: 4, name: 'Myropra-DSR', src: './assets/products/Myropra-DSR-3d.jpg', details: 'Myropra-DSR Capsule 10\'s is a gastrointestinal medicine composed of Rabeprazole (stomach acid reducer) and Domperidone (nausea/vomiting reducer). Together they reduce the amount of acid your stomach makes and decrease the symptoms of nausea and vomiting.',
    keyIngredients: [
      "Rabeprazole",
      "Domperidone"
    ],
    keyBenefits: [
      "Treats symptoms of acid reflux due to hyperacidity, stomach ulcer (Peptic ulcer disease), and Zollinger Ellison syndrome (overproduction of acid due to a pancreatic tumour).",
      "Used short-term to treat gastroesophageal reflux disease (GERD) symptoms.",
      "Rabeprazole is a proton pump inhibitor that helps reduce stomach acid by blocking the actions of an enzyme (H+/K+ ATPase or gastric proton pump).",
      "Domperidone is a prokinetic agent that increases the motility of the upper gastrointestinal tract and blocks the vomiting-inducing centre (chemoreceptor trigger zone-CTZ)."
    ]
  },
  {
    id: 5, name: 'Vitasential syrup', src: './assets/products/Vitasential-new.jpg', details: 'Vitasential syrup helps boost immunity, prevent and manage nutritional deficiencies. It can also help improve appetite and speed up the recovery process post-illness. Vitamins and minerals present in Vitasential replenish the nutrient reserves of the body which aid in the proper functioning of the heart, nervous system, and immunity. The presence of natural antioxidants neutralize the damage caused by harmful chemicals called free radicals and improves the response of the human body against invading infections. This makes it efficient in providing speedy recovery from common infections such as cold and flu.Zinc has been found to be a very important mineral in boosting immunity. It can be used in treating major immune deficiency disorders. It acts as the best nutritional support in cardiac, diabetic, tubercular, and rheumatic patients. It is equally beneficial for patients who are suffering from acute and chronic diseases.',
    keyIngredients: [
      " Vitamins",
      "Minerals",
      "Others"
    ],
    keyBenefits: [
      "Contains health-boosting nutrients like Vitamins A and C. Vitamin A promotes healthy cell growth while Vitamin C helps with the growth and repair of tissues in all parts of your body.",
      "Aids in the absorption of calcium by the body.",
      "Improves the body’s immune function due to the presence of selenium.",
      "Helps in the formation of red blood cells(RBCs) and enhances the absorption of iron in the body.",
      "Helps in maintaining a strong immune system and plays a key role in improving cellular function, wound healing, and metabolism.",
      "Is responsible for good vision, better nerve function, blood formation, and other physiological functions.",
      "Is advised during pregnancy and post-surgery recovery as it is high in minerals which are crucial for cell growth & multiplication, blood formation, hormone & enzyme secretion."
    ]
  },
];
