const defaultQuotes = [
    'আপনি যদি আপনার প্রার্থনায় আল্লাহর প্রতি আরও বেশি মনোযোগ দিতে চান. তবে আপনার প্রার্থনার বাইরে তাঁর প্রতি আরও বেশি মনোযোগ দিন।',
    'একবার নামায অভ্যাসে পরিণত হলে, সফলতা হয়ে ওঠে জীবনধারা।',
    'আপনি যত বেশি কুরআন পড়বেন, ততই আপনি লেখকের প্রেমে পড়বেন।',
    'আল্লাহ কোন আত্মাকে তার বহন করার ক্ষমতার বেশি বোঝা দেন না।',
    'আল্লাহ মানুষের প্রতি মোটেও যুলুম করেন না, বরং মানুষ নিজেরাই নিজেদের প্রতি জুলুম করে।',
    'আপনি যখন ভুলে যান যে আপনার আল্লাহকে প্রয়োজন, তখন তিনি আপনাকে এমন পরিস্থিতিতে ফেলেন যা আপনাকে তাকে ডাকতে বাধ্য করে। আর সেটা আপনার নিজের ভালোর জন্য।',
    'দোয়ার শক্তিকে কখনই অবমূল্যায়ন করবেন না।',
    'বুদ্ধিমান লোক জরুরী কাজেই তার জীবন ব্যয় করে - প্লেটো।',
    'আল্লাহ ছাড়া কেউ আপনাকে প্রকৃত সুখ দিতে পারে না।',
    'সত্য কথা বলা এবং সুন্দর করে লেখা অভ্যাসের ওপর নির্ভরকরে - রাসকিন।',
    'যে দেশে গুণের সমাদর নেই সে দেশে গুণী জন্মাতে পারে না-ডঃ মুহাম্মদশহীদুল্লাহ।',
    'জ্ঞানী লোকেরা আমাকে এই বলে সতর্ক করে যে, জীবন হচ্ছে পদ্মপাতার জলের মত - রবীন্দ্রনাথ ঠাকুর।',
    'যারা প্রত্যেক বস্তুরই দাম জানেন কিন্তু কোনও বস্তুরই প্রকৃত মূল্য জানেন না তারাই সমালোচক। – ওসকার ওয়াইড।',
    'এমনভাবে অধ্যায়ন করবে, যেন তোমার সময়াভাব নেই, তুমি চিরজীবি। এমনভাবে জীবনযাত্রা নির্বাহ করবে, যান মনে হয় তুমি আগামীকালই মারা যাবে। – মহাত্মা গান্ধী।',
    'আমি ভেড়ার নেতৃত্বে সিংহ বাহিনীকে ভয় পাই না, কিন্তু সিংহের অধীনে ভেড়ার পালকে ভয় পাই। -আলেকজান্ডার',
    'জীবনে দুটো জিনিস খুবই কষ্টদায়ক।। একটি হচ্ছে, যখন তোমার ভালোবাসার মানুষ তোমাকে ভালোবাসে কিন্তু তা তোমাকে বলে না।। আর অপরটি হচ্ছে, যখন তোমার ভালোবাসার মানুষ তোমাকে ভালোবাসে না এবং সেটা তোমাকে সরাসরি বলে দেয়। — সেক্সপিয়ার',
    'তুমি যদি কাউকে ভালোবাস,তবে তাকে ছেড়ে দাও। যদি সে তোমার কাছে ফিরে আসে,তবে সে তোমারই ছিল।আর যদি ফিরে না আসে,তবে সে কখনই তোমার ছিল না। – -রবীন্দ্রনাথ ঠাকুর',
    'আর্থিক সচ্ছলতা বন্ধু আনে, কিন্তু ভালোবাসা আনে না । –জোসেফ কনরাড',
    'জ্ঞানী মূর্খকে চিনতে পারে কেননা সে জ্ঞানী। পক্ষান্তরে মূর্খ জ্ঞানীকে চিনতে পারে না, কেননা সে মূর্খ।',
    'মানুষের সাথে বন্ধুত্ব ছিন্ন করে অর্থ উপার্জন করতে যেও না। কারণ, বন্ধুত্ব স্থাপনই অর্থাপর্জনের গুরুত্বপূর্ণ মাধ্যম।',
    'মানুষের সাথে সে রূপ আচরণ কর যেমন তারা পছন্দ করে। নিজের পছন্দ মাফিক আচরণ কর না।',
    'তুমি যতটা মূল্যবান ততটা সমালচানার পাত্র হবে।',
    'বেলাল বিন রাবাহ (রহ বলেন: “পাপ ছোট কি না তা দেখনা বরং দেখ যার অবাধ্যতা করছ তিনি কত বড়।',
    'তুমি পাহাড়ের চুড়ার মত হইয়ো না। কারণ, এতে তুমি মানুষকে ছোট দেখবে আর মানুষও তোমাকে ছোট দেখবে।',
    'সব কিছু জানা তোমার জন্য আবশ্যক নয়। কিন্তু যা কিছু বলছ তার সবটুকু সম্পর্কে জ্ঞান থাকা আবশ্যক।',
    'গাছ থেকে যখন আপেল পড়ল তখন সবাই বলল, গাছ থেকে আপেল পড়েছে। কিন্তু সব মানুষের মধ্যে এক ব্যক্তিই শুধু জানতে চাইল কেন আপেলটি পড়েছে?',
    'Try not to become a man of success. Rather become a man of value. - Albert Einstein',
    'If you really look closely, most overnight successes took a long time. - Steve Jobs',
    "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere. - Barack Obama",
    'I failed my way to success. - Thomas Edison',
    'Do one thing every day that scares you. - Anonymous',
    
];


window.onload = function() {
    main();
};

function main() {
    const newQuoteBtn = document.getElementById('new-quote-btn');
    const quoteBody = document.getElementById('quote-body');

    newQuoteBtn.addEventListener('click', function () {
        const index = Math.floor(Math.random()* defaultQuotes.length);
        const quote = defaultQuotes[index];
        quoteBody.innerText = quote;
        // console.log(index);
    })
}

