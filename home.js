/*// Dark Mode Toggle Functionality
const darkModeToggle = document.getElementById('darkModeToggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved user preference or use system preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
    document.body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️ Light Mode';
}

// Toggle dark mode
darkModeToggle.addEventListener('click', function() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    if (isDarkMode) {
        darkModeToggle.textContent = '☀️ Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        darkModeToggle.textContent = '🌓 Dark Mode';
        localStorage.setItem('theme', 'light');
    }
});

// Listen for system preference changes
prefersDarkScheme.addEventListener('change', e => {
    const newColorScheme = e.matches ? 'dark' : 'light';
    if (newColorScheme === 'dark' && !localStorage.getItem('theme')) {
        document.body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️ Light Mode';
    } else if (newColorScheme === 'light' && !localStorage.getItem('theme')) {
        document.body.classList.remove('dark-mode');
        darkModeToggle.textContent = '🌓 Dark Mode';
    }
});
*/
document.addEventListener('DOMContentLoaded', function() {
    // Sample book data including Hindi literature
        // Hindi literature books
        const books = [
            {
                id: 1,
                title: "Gaban",
                author: "Munshi Premchand",
                genre: "Hindi Classic",
                description: "गबन, मुंशी प्रेमचंद का एक प्रसिद्ध उपन्यास है, जो रमानाथ और जालपा के जीवन और उनके बीच गहनों के प्रति जालपा के लगाव के कारण उत्पन्न होने वाली समस्याओं पर केंद्रित है, जो रमानाथ को गबन करने पर मजबूर कर देती है। ",
                year: 1931,
                pages: 280,
                cover: "gaban.jpg",
                language: "Hindi",
                awards: "Considered one of the greatest Hindi novels",
                wikipedia: "https://en.wikipedia.org/wiki/Gaban_(novel)",
                download: "https://www.centralbankofindia.co.in/sites/default/files/%E0%A4%97%E0%A4%AC%E0%A4%A8%20(%E0%A4%89%E0%A4%AA%E0%A4%A8%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%B8).pdf"

            },
            { 
                id: 2,
                title: "Godaan", 
                author: "Munshi Premchand", 
                genre: "Hindi Classic",
                description: "गोदान, मुंशी प्रेमचंद का एक प्रसिद्ध उपन्यास है, जो भारतीय ग्रामीण जीवन और किसानों की समस्याओं को दर्शाता है, जिसमें मुख्य पात्र होरी है, जो एक मेहनती किसान है, जो अपनी मर्यादा और गाय की इच्छा के लिए संघर्ष करता है। ",
                year: 1936,
                pages: 352,
                cover: "godaan.jpg",
                wikipedia: "https://en.wikipedia.org/wiki/Godaan",
                download: "https://www.hindustanbooks.com/books/godan/godan.pdf"
            },
            { 
                id: 3,
                title: "Madhushala", 
                author: "Harivansh Rai Bachchan", 
                genre: "Hindi Poetry",
                description: "मधुशाला, हरिवंश राय बच्चन की एक प्रसिद्ध काव्य कृति है, जिसमें 135 चार-पंक्ति वाली कविताएँ (रूबाइयाँ) हैं, जो जीवन, प्रेम और आध्यात्मिकता के विषयों पर सूफी दर्शन से प्रभावित हैं. ",
                year: 1935,
                pages: 112,
                cover: "madhushala.jpg",
                wikipedia: "https://en.wikipedia.org/wiki/Madhushala_(poetry_collection)",
                download: "https://drive.google.com/file/d/1WdRJwf2ILRfFz3yx40ULYpPOE4Gzy_Lt/preview"
            },

        {
            id: 4,
            title: "Rashmirathi",
            author: "Ramdhari Singh Dinkar",
            genre: "Hindi Poetry",
            description: "'रश्मिरथी' आधुनिक हिन्दी साहित्य की एक कालजयी काव्य-कृति है। यह 'दिनकर' की सबसे प्रशंसित काव्य-कृतियों में से एक है। इस काव्य के केन्द्र में कर्ण का जीवन है जो 'महाभारत' में अविवाहित कुन्ती (पांडु की पत्नी) का पुत्र था, और जिसे उन्होंने जनमते ही छोड़ दिया था।",
            year: 1952,
            pages: 168,
            cover: "rashmirathi.jpg",
            language: "Hindi",
            awards: "Sahitya Akademi Award",
            wikipedia: "https://hi.wikipedia.org/wiki/rashmirathi",
            download: "https://archive.org/details/rashmirathi_202408/DOC-20240819-WA0004./page/n3/mode/2up"
        },
        {
            id: 5,
            title: "Chandrakanta",
            author: "Devaki Nandan Khatri",
            genre: "Hindi Fantasy",
            description: "रश्मिरथी, रामधारी सिंह 'दिनकर' द्वारा रचित एक प्रसिद्ध खंडकाव्य है, जो महाभारत के महान योद्धा कर्ण के जीवन पर केंद्रित है। यह काव्य कर्ण के चरित्र, त्याग, और मानवीय मूल्यों का चित्रण करता है। ",
            year: 1888,

            pages: 320,
            cover: "chandrakanta.jpg",
            language: "Hindi",
            notable: "First major Hindi fantasy novel",
            wikipedia: "https://en.wikipedia.org/wiki/Chandrakanta",
            download: "https://drive.google.com/file/d/0BwHyNV-baw9MYUMwSzh1aFdEUEE/view?resourcekey=0-jkkIVq6yQqKfmcygfVMUOg"
        },
        {
            id: 6,
            title: "Gunahon Ka Devta",
            author: "Dharamvir Bharati",
            genre: "Hindi Romance",
            description: "गुनाहों का देवता हिंदी उपन्यासकार धर्मवीर भारती के शुरुआती दौर के और सर्वाधिक पढ़े जाने वाले उपन्यासों में से एक है। यह सबसे पहले १९४९ में प्रकाशित हुई थी। इसमें प्रेम के अव्यक्त और अलौकिक रूप का अन्यतम चित्रण है।",
            year: 1949,
            pages: 240,
            cover: "gunahon-ka-devta.jpg",
            language: "Hindi",
            popularity: "One of the most popular Hindi romance novels",
            wikipedia: "https://hi.wikipedia.org/wiki/Gunahon-ka-devta",
            download: "https://docs.google.com/file/d/0B8J8BJeEo3_fWWtYVWllZFk1aW8/edit?pli=1&resourcekey=0-Nco3BBQnet3KyvFk0US-TA"
        },
        {
            id: 7,
            title: "Kitne Pakistan",
            author: "Kamleshwar",
            genre: "Hindi Historical Fiction",
            description: "कितने पाकिस्तान, कमलेश्वर का एक प्रसिद्ध उपन्यास है, जो भारत-पाकिस्तान के विभाजन और उसके बाद की घटनाओं पर केंद्रित है। यह उपन्यास 2003 में साहित्य अकादमी पुरस्कार से सम्मानित हुआ था, और इसे आधुनिक हिंदी साहित्य के क्लासिक्स में से एक माना जाता है. ",
            year: 2000,
            pages: 360,
            cover: "kitne-pakistan.jpg",
            language: "Hindi",
            awards: "Sahitya Akademi Award",
            wikipedia: "https://hi.wikipedia.org/wiki/kitne-pakistan",
            download: "https://hindikahani.hindi-kavita.com/Kitne-Pakistan-Kamleshwar.php"
        },
        {
            id: 8,
            title: "Tamas",
            author: "Bhisham Sahni",
            genre: "Hindi Historical",
            description: "भीष्म साहनी का उपन्यास, तमस 1947 के विभाजन के दौरान हुए सांप्रदायिक दंगों की कहानी है, जो मानवीय संवेदनाओं और सांप्रदायिकता के अंधेरे को उजागर करता है." ,
            year: 1974,
            pages: 300,
            cover: "tamas.jpg",
            language: "Hindi",
            awards: "Sahitya Akademi Award",
            wikipedia: "https://hi.wikipedia.org/wiki/tamas",
            download: "https://dn720004.ca.archive.org/0/items/tamas-by-sahni-bhisham/Tamas%20by%20Sahni%20Bhisham.pdf"
        },
        {
            id: 9,
            title: "Maila Aanchal",
            author: "Phanishwar Nath Renu",
            genre: "Hindi Regional Fiction",
            description: "फणीश्वरनाथ रेणु का उपन्यास, मैला आँचल हिंदी साहित्य का एक महत्वपूर्ण और सशक्त आंचलिक उपन्यास है, जो बिहार के एक पिछड़े ग्रामीण अंचल की जीवनशैली, सामाजिक समस्याओं और संघर्षों का मार्मिक चित्रण करता है। ",
            year: 1954,
            pages: 350,
            cover: "maila-aanchal.webp",
            language: "Hindi",
            influence: "Pioneered the 'Anchalik Upanyas' (regional novel) movement",
            wikipedia: "https://hi.wikipedia.org/wiki/maila-aanchal",
            download: "https://www.scribd.com/document/835991924/Maila-Aanchal-Hindi-Phanishwarnath-Renu"
        },
        {
            id: 10,
            title: "Raag Darbari",
            author: "Shrilal Shukla",
            genre: "Hindi Satire",
            description: "राग दरबारी हिंदी के प्रसिद्ध लेखक श्रीलाल शुक्ल की साहित्य अकादमी पुरस्कार विजेता कृति है। यह शायद अपनी तरह की एक अनूठी पुस्तक है जो स्वतंत्रता के बाद के भारत के ग्रामीण जीवन का संपूर्ण वर्णन करती है।",
            year: 1968,
            pages: 280,
            cover: "raag-darbari.jpg",
            language: "Hindi",
            awards: "Sahitya Akademi Award",
            wikipedia: "https://hi.wikipedia.org/wiki/Raag-Darbari",
            download: "https://kcph.in/wp-content/uploads/2022/12/%E0%A4%B0%E0%A4%BE%E0%A4%97_%E0%A4%A6%E0%A4%B0%E0%A4%AC%E0%A4%BE%E0%A4%B0%E0%A5%80_%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%80_%E0%A4%B2%E0%A4%BE%E0%A4%B2_%E0%A4%B6%E0%A5%81%E0%A4%95%E0%A5%8D%E0%A4%B2.pdf"
        },
        {
            id: 11,
            title: "Nirmala",
            author: "Munshi Premchand",
            genre: "Hindi Social Novel",
            description: "निर्मला में अनमेल विवाह और दहेज प्रथा की दुखान्त व मार्मिक कहानी है। उपन्यास का लक्ष्य अनमेल-विवाह तथा दहेज़ प्रथा के बुरे प्रभाव को अंकित करता है। निर्मला के माध्यम से भारत की मध्यवर्गीय युवतियों की दयनीय हालत का चित्रण हुआ है। उपन्यास के अन्त में निर्मला की मृत्यृ इस कुत्सित सामाजिक प्रथा को मिटा डालने के लिए एक भारी चुनौती है। प्रेमचन्द ने भालचन्द और मोटेराम शास्त्री के प्रसंग द्वारा उपन्यास में हास्य की सृष्टि की है।",
            year: 1928,
            pages: 200,
            cover: "nirmala.jpg",
            language: "Hindi",
            themes: "Women's rights, social reform",
            wikipedia: "https://hi.wikipedia.org/wiki/Nirmala",
            download: "https://drive.google.com/file/d/1zpQc0_Lp6G5SQmnMGfeCGAy0XDQ32uiT/view"
            
        },
        {
            id: 12,
            title: "Kashi Ka Assi",
            author: "Kashi Nath Singh",
            genre: "Hindi Contemporary Fiction",
            description: "काशी का अस्सी, काशीनाथ सिंह का एक प्रसिद्ध उपन्यास है जो बनारस के अस्सी घाट और वहां के जीवन, संस्कृति, और समाज का प्रामाणिक चित्रण करता है। यह उपन्यास बनारस की बोली-बानी, चाय की दुकानों पर होने वाली चर्चाओं, और बनारसी मिजाज को व्यंग्यात्मक और हास्यपूर्ण अंदाज में पेश करता है. ",
            year: 2010,
            pages: 320,
            cover: "kashi-ka-assi.jpg",
            language: "Hindi",
            adaptation: "Adapted into the movie 'Mohalla Assi'",
            wikipedia: "https://hi.wikipedia.org/wiki/kashi-ka-assi",
            download: "https://books.google.co.in/books/about/Kashi_Ka_Aasi.html?id=gHITaERqT6gC&redir_esc=y"

        },
        {
            id: 13,
            title: "Volga Se Ganga",
            author: "Rahul Sankrityayan",
            genre: "Hindi Historical Fiction",
            description: "वोल्गा से गंगा, राहुल सांकृत्यायन की एक प्रसिद्ध पुस्तक है, जो 8000 वर्षों के इतिहास और 10,000 किलोमीटर की दूरी को कहानियों के माध्यम से जोड़ती है, जो आर्यों के इतिहास और भारतीय उपमहाद्वीप में उनके प्रसार पर प्रकाश डालती है." ,
            year: 1944,
            pages: 280,
            cover: "volga-se-ganga.jpg",
            language: "Hindi",
            significance: "Classic of historical fiction in Hindi",
            wikipedia: "https://hi.wikipedia.org/wiki/volga_se_ganga",
            download: "https://drive.google.com/file/d/0B1fyQpyNvjW3a0NNN01XcWhSZ1U/view?resourcekey=0-BwNLRHy8htYH_DATV_xArQ"
        },
        {
            id: 14,
            title: "Ashadh Ka Ek Din",
            author: "Mohan Rakesh",
            genre: "Hindi Drama",
            description: "'आषाढ़ का एक दिन' हिंदी के युगान्तरकारी नाटककारों में से एक मोहन राकेश जी की एक कृति है। इस नाटक को हिंदी साहित्य में इसलिए जाना जाता है क्योंकि इस नाटक से हिंदी रंगमंच में यथार्थवाद की उस समय नयी परम्परा को एक बहुत मजबूत प्रोत्साहन मिला।",
            year: 1958,
            pages: 120,
            cover: "ashadh-ka-ek-din.jpg",
            language: "Hindi",
            importance: "Landmark in modern Hindi drama",
            wikipedia: "https://hi.wikipedia.org/wiki/ashadh_ka_ek_din",
            download: "https://drive.google.com/file/d/1MjqKWImQI8AgtsQMOl2CLtT677Xl2Kvp/preview"
        }
        
    ];

    // Store books in localStorage for access on detail pages
    localStorage.setItem('books', JSON.stringify(books));

    // Search functionality
    const searchInput = document.querySelector('nav input[type="text"]');
    const searchButton = document.querySelector('nav button:first-of-type');
    
    // Create search results container
    const searchResults = document.createElement('div');
    searchResults.className = 'search-results';
    searchResults.style.display = 'none';
    document.body.appendChild(searchResults);

    function performSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        
        if (!searchTerm) {
            clearSearchResults();
            return;
        }

        const results = books.filter(book => 
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm) ||
            book.genre.toLowerCase().includes(searchTerm)
        );

        displaySearchResults(results);
    }

    function displaySearchResults(results) {
        searchResults.innerHTML = '';
        
        if (results.length === 0) {
            searchResults.innerHTML = '<p class="no-results">No books found matching your search.</p>';
        } else {
            const resultsList = document.createElement('ul');
            results.forEach(book => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <h3>${book.title}</h3>
                    <p><strong>Author:</strong> ${book.author}</p>
                    <p><strong>Genre:</strong> ${book.genre}</p>
                `;
                li.addEventListener('click', function() {
                    // Navigate to book details page
                    window.location.href = `book-details.html?id=${book.id}`;
                });
                resultsList.appendChild(li);
            });
            searchResults.appendChild(resultsList);
        }
        
        positionSearchResults();
        searchResults.style.display = 'block';
    }

    function positionSearchResults() {
        const inputRect = searchInput.getBoundingClientRect();
        searchResults.style.top = `${inputRect.bottom + window.scrollY + 5}px`;
        searchResults.style.left = `${inputRect.left + window.scrollX}px`;
        searchResults.style.width = `${inputRect.width}px`;
    }

    function clearSearchResults() {
        searchResults.style.display = 'none';
        searchResults.innerHTML = '';
    }

    // Event listeners
    searchButton.addEventListener('click', performSearch);
    
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        } else {
            performSearch(); // Live search as typing
        }
    });

    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            clearSearchResults();
        }
    });

    // Add CSS for search results
    const style = document.createElement('style');
    style.textContent = `
        .search-results {
            position: absolute;
            background: white;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            border-radius: 4px;
            z-index: 1000;
            max-height: 300px;
            overflow-y: auto;
            border: 1px solid #ddd;
        }
        .search-results ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .search-results li {
            padding: 10px;
            border-bottom: 1px solid #eee;
            cursor: pointer;
        }
        .search-results li:hover {
            background-color: #f5f5f5;
        }
        .search-results li h3 {
            margin: 0 0 5px 0;
            color: #2c3e50;
        }
        .search-results li p {
            margin: 2px 0;
            font-size: 0.9em;
            color: #7f8c8d;
        }
        .no-results {
            padding: 10px;
            color: #7f8c8d;
            text-align: center;
        }
    `;
    document.head.appendChild(style);
});
/*async function fetchBooks(genre) {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&langRestrict=hi`);
    const data = await response.json();
    displayBooks(data.items);
}

function displayBooks(books) {
    const container = document.getElementById("books-container");
    container.innerHTML = "";  // Clear previous books
    books.forEach(book => {
        const title = book.volumeInfo.title;
        const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Unknown";
        const thumbnail = book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/150";

        container.innerHTML += `
            <div style="border:1px solid #ddd; padding:10px; margin:10px; width:200px; text-align:center;">
                <img src="${thumbnail}" alt="Book Cover">
                <h4>${title}</h4>
                <p>${authors}</p>
            </div>
        `;
    });
}
*/


// POPULAR AUTHORS
const writers = [
    {
      img: "images/munsipremchand.jpg",
      name: "मुंशी प्रेमचंद",
      dob: "31 जुलाई 1880",
      birthPlace: "लमही, वाराणसी, उत्तर प्रदेश",
      books: "गोदान, गबन, निर्मला, ईदगाह"
    },
    {
      img: "images/amritapritam.jpg",
      name: "अमृता प्रीतम",
      dob: "31 अगस्त 1919",
      birthPlace: "गुजरांवाला, पंजाब, भारत (अब पाकिस्तान)",
      books: "रसीदी टिकट, पिंजर, अज्ञात का आकाश"
    },
    {
      img: "images/bhishamsahni.jpg", 
      name: "भीष्म साहनी",
      dob: "8 अगस्त 1915",
      birthPlace: "रावलपिंडी, पाकिस्तान",
      books: "तमस, बसंती, माधवी"
    },
    {
      img: "images/dharamvirbharti.jpg",
      name: "धर्मवीर भारती",
      dob: "25 दिसंबर 1926",
      birthPlace: "इलाहाबाद, उत्तर प्रदेश",
      books: "गुनाहों का देवता, सूरज का सातवाँ घोड़ा"
    },
    {
      img: "images/dinkar.jpg",
      name: "रामधारी सिंह दिनकर",
      dob: "23 सितंबर 1908",
      birthPlace: "सिमरिया, बिहार",
      books: "रश्मिरथी, उर्वशी, कुरुक्षेत्र"
    },
    {
      img: "images/harivanshrai.jpg",
      name: "हरिवंश राय बच्चन",
      dob: "27 नवंबर 1907",
      birthPlace: "प्रतापगढ़, उत्तर प्रदेश",
      books: "मधुशाला, मधुबाला, निशा निमंत्रण"
    },
    {
      img: "images/jaishankarprasad.jpg",
      name: "जयशंकर प्रसाद",
      dob: "30 जनवरी 1889",
      birthPlace: "वाराणसी, उत्तर प्रदेश",
      books: "कामायनी, आँसू, तितली"
    },
    {
      img: "images/mahadeviverma.jpg",
      name: "महादेवी वर्मा",
      dob: "26 मार्च 1907",
      birthPlace: "फ़र्रुख़ाबाद, उत्तर प्रदेश",
      books: "नीहार, यामा, दीपशिखा"
    },
    {
      img: "images/mannubhandari.jpg",
      name: "मन्नू भंडारी",
      dob: "3 अप्रैल 1931",
      birthPlace: "भानपुर, मध्य प्रदेश",
      books: "आपका बंटी, महाभोज"
    },
    {
      img: "images/nirala.jpg",
      name: "सूर्यकांत त्रिपाठी 'निराला'",
      dob: "21 फरवरी 1896",
      birthPlace: "मेदिनीपुर, पश्चिम बंगाल",
      books: "राम की शक्ति पूजा, परिमल, कुकुरमुत्ता"
    },
    {
      img: "images/sumitranandanpant.jpg",
      name: "सुमित्रानंदन पंत",
      dob: "20 मई 1900",
      birthPlace: "कौसानी, उत्तराखंड",
      books: "चिदंबरा, वीणा, ग्रंथि"
    }
  ];
  
  let index = 0;
  const gallery = document.getElementById("gallery");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  
  function displayWriters() {
    gallery.innerHTML = "";
    
    for (let i = index; i < index + 4 && i < writers.length; i++) {
      const writer = writers[i];
  
      // Create writer card container
      const writerCard = document.createElement("div");
      writerCard.classList.add("writer-card");
  
      // Create image element
      const img = document.createElement("img");
      img.src = writer.img;
      img.alt = writer.name;
  
      // Create info box
      const infoBox = document.createElement("div");
      infoBox.classList.add("writer-info");
      infoBox.innerHTML = `
        <h3>${writer.name}</h3>
        <p><strong>जन्म:</strong> ${writer.dob}</p>
        <p><strong>जन्म स्थान:</strong> ${writer.birthPlace}</p>
        <p><strong>लोकप्रिय पुस्तकें:</strong> ${writer.books}</p>
      `;
  
      // Append image and info box to writer card
      writerCard.appendChild(img);
      writerCard.appendChild(infoBox);
  
      // Append writer card to gallery
      gallery.appendChild(writerCard);
    }
  }
  
  displayWriters();
  
  next.addEventListener("click", () => {
    if (index + 4 < writers.length) {
      index += 4;
      displayWriters();
    }
  });
  
  prev.addEventListener("click", () => {
    if (index - 4 >= 0) {
      index -= 4;
      displayWriters();
    }
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    // Hindi book data organized by genre (4-5 books per genre)
    const hindiBooksByGenre = {
        "Thriller": [
            { 
                title: "चंद्रकांता", 
                img:"images2/chandrakanta.jpg", 
                desc: "देवकीनंदन खत्री का क्लासिक रहस्यमय उपन्यास",
                author: "देवकीनंदन खत्री"
            },
            { 
                title: "भूतनाथ", 
                img: "images2/bhootnath.webp", 
                desc: "चंद्रकांता संतति का अगला भाग",
                author: "देवकीनंदन खत्री"
            },
            { 
                title: "काला जादू", 
                img: "kalajadu.jpg", 
                desc: "रहस्य और रोमांच से भरपूर कहानी",
                author: "रामकुमार भ्रमर"
            },
            { 
                title: "चंद्रमहल का खजाना", 
                img: "chandra.jpg", 
                desc: "एक रहस्यमय हवेली की कहानी",
                author: "वेद प्रकाश काम्बोज "
            },
            { 
                title: "इंसाफ का जनाज़ा", 
                img: "insaaf.webp", 
                desc: "एक रक्तरंजित रहस्य की कहानी",
                author: "वेद प्रकाश काम्बोज"
            }
        ],
        "Horror": [
            { 
                title: "वेताल पच्चीसी", 
                img: "vetaal.jpg", 
                desc: "राजा विक्रमादित्य और वेताल की कहानियाँ",
                author: "पारंपरिक"
            },
            { 
                title: "देवी", 
                img: "devi.jpg", 
                desc: "भूत-प्रेत की रहस्यमयी कहानियाँ",
                author: "नाग मणि"
            },
            { 
                title: "डरावनी कहानियाँ", 
                img: "images2/tales.jpg", 
                desc: "भयानक अनुभवों की कहानियाँ",
                author: "रवीन्द्रनाथ त्यागी"
            },
            { 
                title: "भूतिया कमरा", 
                img: "images2/bhootiya.jpg", 
                desc: "एक भूतिया कोठी की कहानी",
                author: "जयश्री सातोत्रेर"
            },
            { 
                title: "अनामिका", 
                img: "images2/anamika.jpg", 
                desc: "एक पिशाचिनी की डरावनी कहानी",
                author: "युवराज सिंह पटेल"
            }
        ],
        "Romance": [
            { 
                title: "इत्तेफ़ाक़", 
                img: "images2/iteefaq.jpg", 
                desc: "धर्मवीर भारती की मशहूर प्रेम कहानी",
                author: "केशव उपाध्याय"
            },
            { 
                title: "तेरा नाम इश्क", 
                img: "images2/naam.jpg", 
                desc: "हरिवंश राय बच्चन की कविता संकलन",
                author: "अजय सिंह राणा"
            },
            { 
                title: "निर्मला", 
                img: "images2/nirmala.jpg", 
                desc: "प्रेमचंद की सामाजिक उपन्यास",
                author: "मुंशी प्रेमचंद"
            },
            { 
                title: "आरोही", 
                img: "images2/aarohi.jpg", 
                desc: "प्रेम और विभाजन पर कृति",
                author: "मुकुल कुमार "
            },
            { 
                title: "क्या मुझे प्यार है?", 
                img: "images2/kya.webp", 
                desc: "एक अमर प्रेम कहानी",
                author: "अरविंद पराशर"
            }
        ],
        "Mystery": [
            { 
                title: "जंगल में मर्डर किसने किया?", 
                img: "images2/jungle.jpg", 
                desc: "विष्णु प्रभाकर की रहस्यमय कहानी",
                author: "विष्णु प्रभाकर"
            },
            { 
                title: "अलंकार", 
                img: "alankaar.jpg", 
                desc: "एक खोए हुए खजाने की तलाश",
                author: "मुंशी प्रेमचंद"
            },
            { 
                title: "कोष्टक", 
                img: "images2/koshtak.jpg", 
                desc: "एक रहस्यमय द्वीप पर घटनाएँ",
                author: "नरेंद्र कोहली"
            },
            { 
                title: "पत्थर", 
                img: "images2/patthar.jpg", 
                desc: "एक गुप्त संदेश को समझने की कोशिश",
                author: "मनोहर श्याम जोशी"
            },
            { 
                title: "महाभारत का रहस्य: अज्ञात तथ्य और गूढ़ रहस्य", 
                img: "images2/mahabharat.jpg", 
                desc: "एक जटिल हत्या का रहस्य",
                author: "उदय प्रकाश"
            }
        ],
        "Fantasy": [
            { 
                title: "अमर चित्र कथा", 
                img: "images2/books/amar-chitra-katha.jpg", 
                desc: "पौराणिक कथाओं का संग्रह",
                author: "अनंत पै"
            },
            { 
                title: "नागलोक", 
                img: "images2/books/naglok.jpg", 
                desc: "सर्पलोक की काल्पनिक यात्रा",
                author: "राहुल सांकृत्यायन"
            },
            { 
                title: "पुष्पक विमान", 
                img: "images2/books/pushpak-viman.jpg", 
                desc: "प्राचीन विमानों की कहानी",
                author: "डॉ. रामविलास शर्मा"
            },
            { 
                title: "देवासुर संग्राम", 
                img: "images/books/dev-asur.jpg", 
                desc: "देवताओं और असुरों के युद्ध की कथा",
                author: "निर्मल वर्मा"
            },
            { 
                title: "मायावी दुनिया", 
                img: "images/books/mayavi-duniya.jpg", 
                desc: "एक जादुई दुनिया की कहानी",
                author: "कृष्णा सोबती"
            }
        ],
        "Biography": [
            { 
                title: "मेरी कहानी", 
                img: "images/books/meri-kahani.jpg", 
                desc: "डॉ. ए.पी.जे. अब्दुल कलाम की आत्मकथा",
                author: "ए.पी.जे. अब्दुल कलाम"
            },
            { 
                title: "संघर्ष की ऊँचाइयाँ", 
                img: "images/books/sangharsh.jpg", 
                desc: "हरिवंश राय बच्चन की आत्मकथा",
                author: "हरिवंश राय बच्चन"
            },
            { 
                title: "अपनी खबर", 
                img: "images/books/apni-khabar.jpg", 
                desc: "महादेवी वर्मा की आत्मकथा",
                author: "महादेवी वर्मा"
            },
            { 
                title: "जीवन यात्रा", 
                img: "images/books/jeevan-yatra.jpg", 
                desc: "प्रेमचंद की जीवनी",
                author: "अमृत राय"
            },
            { 
                title: "अंतिम अरण्य", 
                img: "images/books/antim-aranyavasi.jpg", 
                desc: "महात्मा गांधी की जीवनी",
                author: "रामचंद्र गुहा"
            }
        ],
        "History": [
            { 
                title: "भारत एक खोज", 
                img: "images/books/bharat-ek-khoj.jpg", 
                desc: "जवाहरलाल नेहरू द्वारा भारत का इतिहास",
                author: "जवाहरलाल नेहरू"
            },
            { 
                title: "1857 की क्रांति", 
                img: "images/books/1857.jpg", 
                desc: "भारत के प्रथम स्वतंत्रता संग्राम का वर्णन",
                author: "वी.डी. सावरकर"
            },
            { 
                title: "गुप्त साम्राज्य", 
                img: "images/books/gupt-samrajya.jpg", 
                desc: "गुप्त काल के इतिहास पर आधारित",
                author: "रामशरण शर्मा"
            },
            { 
                title: "मुगल साम्राज्य", 
                img: "images/books/mughal.jpg", 
                desc: "मुगल काल की ऐतिहासिक घटनाएँ",
                author: "सतीश चंद्र"
            },
            { 
                title: "प्राचीन भारत", 
                img: "images/books/prachin-bharat.jpg", 
                desc: "प्राचीन भारत का विस्तृत इतिहास",
                author: "रोमिला थापर"
            }
        ],
        
                
    };

    // Function to open books in new window
    window.fetchBooks = function(genre) {
        genre = genre.trim();
        
        // Create HTML for new window
        let html = `<!DOCTYPE html>
        <html>
        <head>
            <title>${genre} की हिंदी किताबें</title>
            <style>
    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin: 0;
        padding: 20px;
        background: #f5f7fa;
        color: #333;
    }
    .header {
        text-align: center;
        margin-bottom: 30px;
        padding-bottom: 15px;
        border-bottom: 2px solid #e74c3c;
    }
    .books-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* Fixed 3 columns */
        gap: 30px;
        max-width: 1400px; /* Increased max-width */
        margin: 0 auto;
    }
    .book-card {
        background: white;
        width: 100%;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        transition: transform 0.3s, box-shadow 0.3s;
         
    }
    .book-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0,0,0,0.15);
       
    }
    .book-cover {
        width: 100%;
        height: 300px; /* Increased height */
        object-fit: cover;
        border-bottom: 1px solid #eee;
        background-image:cover;
        background-repeat:no-repeat;
        background-position:center;
    }
    .book-details {
        padding: 20px; /* Increased padding */
    }
    .book-title {
        font-size: 1.3rem; /* Larger font */
        margin: 0 0 8px 0;
        color: #2c3e50;
        font-weight: 600;
    }
    .book-author {
        color: #e74c3c;
        font-size: 1rem; /* Larger font */
        margin: 0 0 10px 0;
        font-weight: 500;
    }
    .book-desc {
        font-size: 0.95rem; /* Larger font */
        color: #666;
        line-height: 1.6;
        margin: 0;
        display: -webkit-box;
        -webkit-line-clamp: 4; /* Show more lines */
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    .no-books {
        grid-column: 1/-1;
        text-align: center;
        padding: 40px;
        color: #7f8c8d;
        font-size: 1.1rem;
    }
    @media (max-width: 1200px) {
        .books-grid {
            gap: 20px;
        }
        .book-cover {
            height: 280px;
        }
    }
    @media (max-width: 992px) {
        .books-grid {
            grid-template-columns: repeat(2, 1fr); /* 2 columns on medium screens */
        }
    }
    @media (max-width: 768px) {
        .books-grid {
            gap: 20px;
            max-width: 700px;
        }
        .book-cover {
            height: 250px;
        }
    }
    @media (max-width: 576px) {
        .books-grid {
            grid-template-columns: 1fr; /* 1 column on small screens */
            max-width: 400px;
        }
        .book-card {
            max-width: 100%;
        }
        .book-cover {
            height: 350px; /* Taller cover on mobile */
        }
    }
</style>
        </head>
        <body>
            <div class="header">
                <h1>${genre} की हिंदी किताबें</h1>
            </div>
            <div class="books-grid">`;
        
        // Add books to HTML
        if (hindiBooksByGenre[genre]) {
            hindiBooksByGenre[genre].forEach(book => {
                html += `
                <div class="book-card">
                    <img src="${book.img}" alt="${book.title}" class="book-cover">
                    <div class="book-details">
                        <h3 class="book-title">${book.title}</h3>
                        <p class="book-author">${book.author}</p>
                        <p class="book-desc">${book.desc}</p>
                    </div>
                </div>`;
            });
        } else {
            html += `<div class="no-books">इस श्रेणी की कोई पुस्तक उपलब्ध नहीं है</div>`;
        }
        
        // Close HTML
        html += `</div></body></html>`;
        
        // Open new window
        const bookWindow = window.open('', '_blank');
        bookWindow.document.write(html);
        bookWindow.document.close();
    };

    // Optional: Add click handlers programmatically
    document.querySelectorAll('.feature-box button').forEach(button => {
        const genre = button.querySelector('h3').textContent.trim();
        button.addEventListener('click', () => fetchBooks(genre));
    });
    
    
//   SLIDER
const books = [
    { 
        img: "photos/a.jpg ", 
        title: "आँधियों का शहर", 
        author: "राही मासूम रज़ा", 
        description: "समाज और राजनीति की जटिलताओं का चित्रण।",
        wiki: "https://hi.wikipedia.org/wiki/राही_मासूम_रज़ा"
    },
    { 
        img: "photos/b.jpg", 
        title: "अक्टूबर जंक्शन", 
        author: "हुसैन जैदी", 
        description: "थ्रिलर और अपराध कथा पर आधारित।",
        wiki: "https://en.wikipedia.org/wiki/Hussain_Zaidi"
    },
    { 
        img: "photos/c.jpg", 
        title: "पतझड़", 
        author: "मन्नू भंडारी", 
        description: "सामाजिक बदलाव और नारी जीवन पर आधारित।",
        wiki: "https://hi.wikipedia.org/wiki/मन्नू_भंडारी"
    },
    { 
        img: "photos/d.jpg", 
        title: "गुनाहों का देवता", 
        author: "धर्मवीर भारती", 
        description: "प्रेम और समाज के संघर्ष की कहानी।",
        wiki: "https://hi.wikipedia.org/wiki/गुनाहों_का_देवता"
    },
    { 
        img: "photos/e.jpg", 
        title: "अलिफ", 
        author: "सुमंत बत्रा", 
        description: "आत्मखोज की प्रेरणादायक कहानी।",
        wiki: "https://www.thebetterindia.com/118731/sumant-batra-kumaon-literary-festival/"
    },
    { 
        img: "photos/f.jpg", 
        title: "पिंजर", 
        author: "अमृता प्रीतम", 
        description: "भारत-पाक विभाजन की पीड़ा को दर्शाने वाला उपन्यास।",
        wiki: "https://hi.wikipedia.org/wiki/पिंजर_(उपन्यास)"
    },
    { 
        img: "photos/g.jpg", 
        title: "रश्मिरथी", 
        author: "रामधारी सिंह दिनकर", 
        description: "कर्ण के जीवन पर आधारित महाकाव्य।",
        wiki: "https://hi.wikipedia.org/wiki/रश्मिरथी"
    },
    { 
        img: "photos/h.jpg", 
        title: "तमस", 
        author: "भीष्म साहनी", 
        description: "भारत विभाजन की त्रासदी को दर्शाने वाला उपन्यास।",
        wiki: "https://hi.wikipedia.org/wiki/तमस"
    },
    { 
        img: "photos/i.jpg", 
        title: "गोदान", 
        author: "मुंशी प्रेमचंद", 
        description: "भारतीय किसानों के संघर्ष की कहानी।",
        wiki: "https://hi.wikipedia.org/wiki/गोदान"
    },
    { 
        img: "photos/j.jpg", 
        title: "जाना ज़रूरी है क्या", 
        author: "नासिरा शर्मा", 
        description: "सामाजिक संबंधों और मानवता की कथा।",
        wiki: "https://hi.wikipedia.org/wiki/नासिरा_शर्मा"
    },
    { 
        img: "photos/k.jpg", 
        title: "देर रात तक", 
        author: "कृष्ण बलदेव वैद", 
        description: "नए लेखन शैली का उत्कृष्ट उदाहरण।",
        wiki: "https://hi.wikipedia.org/wiki/कृष्ण_बलदेव_वैद"
    },

];

const slider = document.getElementById("slider22");

// Function to display books
function displayBooks() {
    slider.innerHTML = "";
    books.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        const img = document.createElement("img");
        img.src = book.img;
        img.alt = book.title;
        img.classList.add("book-img"); // Add class for styling

        const infoBox = document.createElement("div");
        infoBox.classList.add("book-info");
        infoBox.innerHTML = `<p><strong>${book.title}</strong></p>
                             <p>${book.author}</p>
                             <p>${book.description}</p>
                             <a href="${book.wiki}" target="_blank" class="wiki-btn">Read More</a>`; // Wikipedia link

        bookCard.appendChild(img);
        bookCard.appendChild(infoBox);
        slider.appendChild(bookCard);
    });
}

// Auto-moving slider function
let scrollInterval;

function startAutoSlide() {
    scrollInterval = setInterval(() => {
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
            slider.scrollLeft = 3.5;
        } else {
            slider.scrollLeft += 3.5; // Adjust speed if needed
        }
    }, 50);
}

function stopAutoSlide() {
    clearInterval(scrollInterval);
}

displayBooks();
startAutoSlide();

// Pause on hover
slider.addEventListener("mouseover", stopAutoSlide);
slider.addEventListener("mouseleave", startAutoSlide);
});




