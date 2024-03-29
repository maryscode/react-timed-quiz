export const questions = [  
    {
        questionText: 'Prostate cancer is one of the most common cancers among American men. In 2021, the American Cancer Society estimates that prostate cancer will be diagnosed in <span class="font-arial">_______________</span> men in America.',
        ref: '<strong>Reference:</strong> American Cancer Society. About prostate cancer. Updated January 12, 2021. Accessed April 5, 2021. https://www.cancer.org/content/dam/CRC/PDF/Public/8793.00.pdf.',
        answerOptions: [
            { answerText: '10,117 men', isCorrect: false },
            { answerText: '56,290 men', isCorrect: false },
            { answerText: '103,072 men', isCorrect: false },
            { answerText: '248,530 men', isCorrect: true },
        ],
        customClass: 'wide',
        answerType: 'singleAnswer', 
        answerLayout: 'col-2',
        buttonTextAlign: 'center', 
        buttonSize: 'small'
    },
    {
        questionText: 'Prostate cancer is <span class="font-arial">__________________</span>.',
        ref: '<strong>Reference:</strong> American Cancer Society. About prostate cancer. Updated January 12, 2021. Accessed April 5, 2021. https://www.cancer.org/content/dam/CRC/PDF/Public/8793.00.pdf.',
        answerOptions: [
            { answerText: 'The leading cause of cancer death among American men', isCorrect: false },
            { answerText: 'The second leading cause of cancer death among American men', isCorrect: true },
            { answerText: 'The third leading cause of cancer death among American men', isCorrect: false },
            { answerText: 'The fourth leading cause of cancer death among American men', isCorrect: false },
        ], 
        customClass: 'mb-10',
        answerType: 'singleAnswer', 
        answerLayout: 'col-1',
        buttonTextAlign: 'left', 
        buttonSize: 'xlarge'
    },    
    {
        questionText: 'Advanced prostate cancer spans multiple clinical disease states, and includes patients with <span class="font-arial">______________________</span>. ',
        ref: '<strong>References:</strong> <strong>1.</strong> Lowrance WT, Breau RH, Chou R, et al. Advanced prostate cancer: AUA/ASTRO/SUO guideline part I. <br /><em>J Urol</em>. 2021;205:(1)14-21. <strong>2.</strong> Lowrance WT, Breau RH, Chou R, et al. Advanced prostate cancer: AUA/ASTRO/SUO guideline part II. <em>J Urol</em>. 2021;205:(1):22-29.',
        answerOptions: [
            { answerText: 'Locally advanced disease', isCorrect: true },
            { answerText: 'Biochemically recurrent disease', isCorrect: true },
            { answerText: 'Metastatic disease', isCorrect: true },
        ],
        customClass: 'condensed',
        answerType: 'multiAnswer', 
        answerLayout: 'col-1',
        buttonTextAlign: 'left', 
        buttonSize: 'large'
    },   
    {
        questionText: 'ORGOVYX is an <span class="font-arial">_____________________</span>.',
        ref: '<strong>Reference:</strong> ORGOVYX (relugolix) [prescribing information]. Brisbane, CA: Myovant Sciences, Inc.; 2020.',
        answerOptions: [
            { answerText: 'Immunotherapy', isCorrect: false },
            { answerText: 'Androgen deprivation therapy', isCorrect: true },
        ],
        
        customClass: '',
        answerType: 'singleAnswer', 
        answerLayout: 'col-1',
        buttonTextAlign: 'left', 
        buttonSize: 'large'        
    },   
    {
        questionText: 'ORGOVYX is the only oral once-a-day* G<span class="lowercase">n</span>RH receptor <span class="font-arial">___________________</span> for advanced prostate cancer.',
        ref: '<p>GnRH=gonadotropin-releasing hormone.<br /><span class="hang">*</span>After initial loading dose of 3 pills.</p><p><strong>References:</strong> <strong>1.</strong> ORGOVYX (relugolix) [prescribing information]. Brisbane, CA: Myovant Sciences, Inc.; 2020. <strong>2.</strong> Shore ND, Saad F, Cookson MS, et al. Oral relugolix for androgen-deprivation therapy in advanced prostate cancer. <em>N Engl J Med</em>. 2020;382(23):2187-2196.</p>',
        answerOptions: [
            { answerText: 'Antagonist', isCorrect: true },
            { answerText: 'Agonist', isCorrect: false },
        ],
        answerType: 'singleAnswer', 
        answerLayout: 'col-2',
        buttonTextAlign: 'center', 
        buttonSize: 'small'   
    },    
    {
        questionText: 'In the HERO trial, the primary endpoint evaluated whether patients achieved and maintained testosterone suppression to <50 <span class="lowercase">ng/d</span>L from <span class="font-arial">___________________</span>.',
        ref: '<strong>Reference:</strong> ORGOVYX (relugolix) [prescribing information]. Brisbane, CA: Myovant Sciences, Inc.; 2020.',
        answerOptions: [
            { answerText: 'Day 29 through Week 48', isCorrect: true },
            { answerText: 'Day 30 through Week 27', isCorrect: false },
            { answerText: 'Day 24 through Week 30', isCorrect: false },
            { answerText: 'Day 29 through Week 38', isCorrect: false },
        ],
        
        customClass: 'wide',
        answerType: 'singleAnswer', 
        answerLayout: 'col-2',
        buttonTextAlign: 'left', 
        buttonSize: 'small',        
        heroStudyDesign: true,
    },   
    {
        questionText: 'G<span class="lowercase">n</span>RH receptor antagonist mechanism of action<br />reduces the release of <span class="font-arial">______________________</span>. ',
        ref: '<strong>References: 1.</strong> ORGOVYX (relugolix) [prescribing information]. Brisbane, CA: Myovant Sciences, Inc.; 2020. <br /><strong>2.</strong> Shore ND, Saad F, Cookson MS, et al. Oral relugolix for androgen-deprivation therapy in advanced prostate <br />cancer. <em>N Engl J Med</em>. 2020;382(23):2187-2196.',
        answerOptions: [
            { answerText: 'LH', isCorrect: true },
            { answerText: 'FSH', isCorrect: true },
            { answerText: 'testosterone', isCorrect: true },
        ],
        customClass: 'mb-20',
        answerType: 'multiAnswer', 
        answerLayout: 'col-1',
        buttonTextAlign: 'center', 
        buttonSize: 'small',  
        heroStudyDesign: false,        
    },
    {
        questionText: 'In the HERO trial, what percentage of men with advanced prostate cancer achieved and maintained testosterone suppression to <50 <span class="lowercase">ng/d</span>L from Day 29 through Week 48 with ORGOVYX?',
        ref: '<strong>Reference:</strong> ORGOVYX (relugolix) [prescribing information]. Brisbane, CA: Myovant Sciences, Inc.; 2020.',
        answerOptions: [
            { answerText: '89%', isCorrect: false },
            { answerText: '87%', isCorrect: false },
            { answerText: '79%', isCorrect: false },
            { answerText: '97%', isCorrect: true },
        ],
        answerType: 'singleAnswer', 
        answerLayout: 'col-2',
        buttonTextAlign: 'center', 
        buttonSize: 'small',  
        heroStudyDesign: true
    },    
    {
        questionText: 'In a substudy of the HERO trial, 55% of 137 men treated with ORGOVYX had their testosterone return to above the lower limit of the normal range (>280 <span class="lowercase">ng/d</span>L) or baseline values <span class="font-arial">_______________</span> after discontinuation.*<sup>†</sup>',
        ref: '<p><span class="hang">*</span>Kaplan-Meier estimates within each group.<br><sup class="hang">†</sup>This endpoint was analyzed for exploratory purposes without formal testing.</p><p><strong>Reference:</strong> Shore ND, Saad F, Cookson MS, et al. Oral relugolix for androgen-deprivation therapy in advanced prostate <br >cancer. <em>N Engl J Med</em>. 2020;382(23):2187-2196 and supplementary appendix, available online. </p>',
        answerOptions: [
            { answerText: '90 days after discontinuation', isCorrect: true },
            { answerText: '120 days after discontinuation', isCorrect: false },
            { answerText: '97 days after discontinuation', isCorrect: false },
            { answerText: '180 days', isCorrect: false },
        ],
        customClass: 'wide mb-30',
        answerType: 'singleAnswer', 
        answerLayout: 'col-2',
        buttonTextAlign: 'left', 
        buttonSize: 'small', 
        heroStudyDesign: true
    },   
    {
        questionText: 'According to the ORGOVYX full Prescribing Information, these adverse reactions occurred in ≥10% of patients treated with ORGOVYX <span class="font-arial">______________________</span>. ',
        ref: '<p><span class="hang">*</span>Includes arthralgia, back pain, pain in extremity, musculoskeletal pain, myalgia, bone pain, neck pain, arthritis, musculoskeletal stiffness, noncardiac chest pain, musculoskeletal chest pain, spinal pain, and musculoskeletal discomfort.<br><sup class="hang">†</sup>Includes fatigue and asthenia.<br><sup class="hang">‡</sup>Includes diarrhea and colitis.</p><p><strong>Reference:</strong> ORGOVYX (relugolix) [prescribing information]. Brisbane, CA: Myovant Sciences, Inc.; 2020.</p>',
        answerOptions: [
            { answerText: 'Hot flush', isCorrect: true },
            { answerText: 'Musculoskeletal pain*', isCorrect: true },
            { answerText: 'Fatigue<sup>†</sup>', isCorrect: true },
            { answerText: 'Dry eyes', isCorrect: false },
            { answerText: 'Diarrhea<sup>‡</sup>', isCorrect: true },
            { answerText: 'Constipation', isCorrect: false },
        ],
        customClass: 'condensed mb-5 pb-5',
        answerType: 'multiAnswer', 
        answerLayout: 'col-3',
        buttonTextAlign: 'center', 
        buttonSize: 'small', 
        heroStudyDesign: true        
    },   
    {
        questionText: 'ORGOVYX prescribing information includes warnings and precautions about <span class="font-arial">____________________</span>. ',
        ref: '<strong>Reference:</strong> ORGOVYX (relugolix) [prescribing information]. Brisbane, CA: Myovant Sciences, Inc.; 2020.',
        answerOptions: [
            { answerText: 'QT prolongation', isCorrect: true },
            { answerText: 'Embryo-fetal toxicity', isCorrect: true },
            { answerText: 'Laboratory testing<br />(monitor for rising PSA levels)', isCorrect: true },
        ],
        customClass: ' mb-30',
        answerType: 'multiAnswer', 
        answerLayout: 'col-1',
        buttonTextAlign: 'left', 
        buttonSize: 'large', 
    },    
    {
        questionText: 'The ORGOVYX mechanism of action does not cause an initial testosterone surge, thereby mitigating the possibility of tumor flare.',
        ref: '<strong>References: 1.</strong> ORGOVYX (relugolix) [prescribing information]. Brisbane, CA: Myovant Sciences, Inc.; 2020. <strong>2.</strong> Shore ND, Saad F, Cookson MS, et al. Oral relugolix for androgen-deprivation therapy in advanced prostate cancer. <em>N Engl J Med</em>. 2020;382(23):2187-2196.',
        answerOptions: [
            { answerText: 'True', isCorrect: true },
            { answerText: 'False', isCorrect: false },
        ],
        answerType: 'boolean', 
        answerLayout: 'col-2',
        buttonTextAlign: 'center', 
        buttonSize: 'small', 
    },   
    {
        questionText: 'On Day 4 of the HERO study, ORGOVYX suppressed testosterone to <50 <span class="lowercase">ng/d</span>L in 56% of men with no initial surge.*',
        ref: '<p class="mb-5"><span class="hang">*</span>Kaplan-Meier estimates within each group.</p><p><strong>References: 1.</strong> ORGOVYX (relugolix) [prescribing information]. Brisbane, CA: Myovant Sciences, Inc.; 2020. <strong>2.</strong> Shore ND, Saad F, Cookson MS, et al. Oral relugolix for androgen-deprivation therapy in advanced prostate cancer. <em>N Engl J Med</em>. 2020;382(23):2187-2196.</p>',
        answerOptions: [
            { answerText: 'True', isCorrect: true },
            { answerText: 'False', isCorrect: false },
        ],
        answerType: 'boolean', 
        answerLayout: 'col-2',
        buttonTextAlign: 'center', 
        buttonSize: 'small',
        heroStudyDesign: true
    },       
    {
        questionText: 'In the HERO trial, the percentage of men treated with ORGOVYX who reached profound testosterone suppression, defined as testosterone concentrations <br><20 <span class="lowercase">ng/d</span>L was <span class="font-arial">_____________________</span>. ',
        ref: '<p class="mb-5"><span class="hang">*</span>Kaplan-Meier estimates within each group.</p><p><strong>Reference:</strong> ORGOVYX (relugolix) [prescribing information]. Brisbane, CA: Myovant Sciences, Inc.; 2020.</p>',
        answerOptions: [
            { answerText: 'On Day 15: 22% of men*', isCorrect: false },
            { answerText: 'On Day 15: 78% of men*', isCorrect: true },
            { answerText: 'On Day 29: 36% of men*', isCorrect: false },
            { answerText: 'On Day 29: 95% of men*', isCorrect: true },
        ],
        customClass: 'mb-20',
        answerType: 'multiAnswer', 
        answerLayout: 'col-2',
        buttonTextAlign: 'center', 
        buttonSize: 'medium', 
        heroStudyDesign: true,
    },
    {
        questionText: 'In the HERO trial, the average PSA reduction after 3 months for patients taking ORGOVYX was <span class="font-arial">________________________</span>.',
        ref: '<p class="mb-5"><strong>PSA results should be interpreted with caution because of the heterogeneity of the patient population studied.<br>No evidence has shown that the rapidity of PSA decline is related to a clinical benefit. </strong></p><p>PSA=prostate-specific antigen.<br /><strong>Reference:</strong> ORGOVYX (relugolix) [prescribing information]. Brisbane, CA: Myovant Sciences, Inc.; 2020.</p>',
        answerOptions: [
            { answerText: '97%', isCorrect: false },
            { answerText: '87%', isCorrect: false },
            { answerText: '91%', isCorrect: false },
            { answerText: '92%', isCorrect: true },
        ],
        customClass: '',
        answerType: 'singleAnswer', 
        answerLayout: 'col-2',
        buttonTextAlign: 'center', 
        buttonSize: 'small', 
        heroStudyDesign: true,
    },    
    {
        questionText: 'According to the ORGOVYX full Prescribing Information, fatal adverse events, excluding prostate cancer–related deaths, were reported in <span class="font-arial">______</span>% of patients receiving ORGOVYX in the HERO trial.',
        ref: '<strong>Reference:</strong> ORGOVYX (relugolix) [prescribing information]. Brisbane, CA: Myovant Sciences, Inc.; 2020.',
        answerOptions: [
            { answerText: '0.9%', isCorrect: false },
            { answerText: '1.0%', isCorrect: false },
            { answerText: '0.7%', isCorrect: false },
            { answerText: '0.8%', isCorrect: true },
        ],
        customClass: '',
        answerType: 'singleAnswer', 
        answerLayout: 'col-2',
        buttonTextAlign: 'center', 
        buttonSize: 'small', 
        heroStudyDesign: true,
    },   
    {
        questionText: 'When did the AUA/ASTRO/SUO Guidelines acknowledge the FDA approval of ORGOVYX as an additional option for androgen deprivation therapy for adults with advanced prostate cancer?',
        ref: '<p>AUA=American Urological Association; ASTRO=American Society for Radiation Oncology; SUO=Society of Urologic Oncology.</p><p><strong>Reference:</strong> Lowrance WT, Breau RH, Chou R, et al. Advanced prostate cancer: AUA/ASTRO/SUO guideline part II. <em>J Urol</em>. 2021;205(1):22-29.</p>',
        answerOptions: [
            { answerText: 'May 2021', isCorrect: false },
            { answerText: 'December 2020', isCorrect: false },
            { answerText: 'March 2021', isCorrect: true },
            { answerText: 'February 2021', isCorrect: false },
        ],
        customClass: '',
        answerType: 'singleAnswer', 
        answerLayout: 'col-2',
        buttonTextAlign: 'center', 
        buttonSize: 'small', 
    },   
    {
        questionText: 'In the HERO study, the safety profile includes the evaluation of major adverse cardiovascular events.',
        ref: '<strong>Reference:</strong> ORGOVYX (relugolix) [prescribing information]. Brisbane, CA: Myovant Sciences, Inc.; 2020.',
        answerOptions: [
            { answerText: 'True', isCorrect: true },
            { answerText: 'False', isCorrect: false },
        ],
        answerType: 'boolean', 
        answerLayout: 'col-2',
        buttonTextAlign: 'center', 
        buttonSize: 'small', 
        heroStudyDesign: true,
    },    
    {
        questionText: 'According to the ORGOVYX full Prescribing Information, fatal and nonfatal myocardial infarction and stroke were reported in <span class="font-arial">______</span>% of patients receiving ORGOVYX in the HERO trial.',
        ref: '<strong>Reference:</strong> ORGOVYX (relugolix) [prescribing information]. Brisbane, CA: Myovant Sciences, Inc.; 2020.',
        answerOptions: [
            { answerText: '2.8%', isCorrect: false },
            { answerText: '3.5%', isCorrect: false },
            { answerText: '3.1%', isCorrect: false },
            { answerText: '2.7%', isCorrect: true },
        ],
        answerType: 'singleAnswer', 
        answerLayout: 'col-2',
        buttonTextAlign: 'center', 
        buttonSize: 'small', 
        heroStudyDesign: true,
    },   
    {
        questionText: 'Permanent discontinuation of treatment with ORGOVYX due to an adverse reaction occurred in what percentage of patients?',
        ref: '<strong>Reference:</strong> ORGOVYX (relugolix) [prescribing information]. Brisbane, CA: Myovant Sciences, Inc.; 2020.',
        answerOptions: [
            { answerText: '2.9%', isCorrect: false },
            { answerText: '3.5%', isCorrect: true },
            { answerText: '4.0%', isCorrect: false },
            { answerText: '0.8%', isCorrect: false },
        ],
        answerType: 'singleAnswer', 
        answerLayout: 'col-2', 
        buttonTextAlign: 'center', 
        buttonSize: 'small', 
        heroStudyDesign: true,
    },
    {
        questionText: 'ORGOVYX offers injection-free administration.',
        ref: '<strong>References: 1.</strong> ORGOVYX (relugolix) [prescribing information]. Brisbane, CA: Myovant Sciences, Inc.; 2020. <strong>2.</strong> Shore ND, Saad F, Cookson MS, et al. Oral relugolix for androgen-deprivation therapy in advanced prostate cancer. <em>N Engl J Med</em>. 2020;382(23):2187-2196.',
        answerOptions: [
            { answerText: 'True', isCorrect: true },
            { answerText: 'False', isCorrect: false },
        ],
        answerType: 'boolean', 
        answerLayout: 'col-2',
        buttonTextAlign: 'center', 
        buttonSize: 'small', 
    },    
    {
        questionText: 'ORGOVYX should be taken <span class="font-arial">__________________</span>. ',
        ref: '<p class="mb-5"><span class="hang">*</strong>After an initial loading dose of 3 pills.</p><p><strong>Reference:</strong> ORGOVYX (relugolix) [prescribing information]. Brisbane, CA: Myovant Sciences, Inc.; 2020.</p>',
        answerOptions: [
            { answerText: 'With or without food', isCorrect: true },
            { answerText: 'Around the same time each day', isCorrect: true },
            { answerText: 'Four times a day', isCorrect: false },
            { answerText: 'Whole, not chewed or crushed', isCorrect: true },
            { answerText: 'Once a day*', isCorrect: true },
        ],
        customClass: 'mb-10',
        answerType: 'multiAnswer', 
        answerLayout: 'col-1',
        buttonTextAlign: 'left', 
        buttonSize: 'largeB', 
    },
    {
        questionText: 'The mean effective half-life of ORGOVYX is <span class="font-arial">_______</span> hours.',
        ref: '<strong>Reference:</strong> ORGOVYX (relugolix) [prescribing information]. Brisbane, CA: Myovant Sciences, Inc.; 2020.',
        answerOptions: [
            { answerText: '24 hours', isCorrect: false },
            { answerText: '25 hours', isCorrect: true },
            { answerText: '30 hours', isCorrect: false },
            { answerText: '40 hours', isCorrect: false },
        ],
        customClass: '',
        answerType: 'singleAnswer', 
        answerLayout: 'col-2',
        buttonTextAlign: 'center', 
        buttonSize: 'small', 
    },   
    {
        questionText: 'If a patient misses a dose of ORGOVYX, they should take the next dose of ORGOVYX as soon as they remember. If the dose was missed by more than 12 hours, patients should <span class="font-arial">______________________</span>.',
        ref: '<strong>Reference:</strong> ORGOVYX (relugolix) [prescribing information]. Brisbane, CA: Myovant Sciences, Inc.; 2020.',
        answerOptions: [
            { answerText: 'Not take the missed dose and resume with the next scheduled dose', isCorrect: true },
            { answerText: 'Still take the missed dose immediately', isCorrect: false },
            { answerText: 'Stop taking ORGOVYX until they see their doctor', isCorrect: false },
            { answerText: 'Take 2 doses of ORGOVYX, just in case they forget again', isCorrect: false },
        ],
        customClass: 'condensed mb-10',
        answerType: 'singleAnswer', 
        answerLayout: 'col-1',
        buttonTextAlign: 'left', 
        buttonSize: 'xlarge', 
    },    

]