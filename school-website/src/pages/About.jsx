function About() {
  return (
    <div className="page-about container section" style={{ marginTop: '100px' }}>

      {/* Hero Banner */}
      <div style={{ textAlign: 'center', padding: '2rem 0 1rem' }}>
        <img src="/school-logo.png" alt="Kid's Campus Zone School Logo" style={{ width: '140px', marginBottom: '1rem' }} />
        <h1 style={{ fontSize: '2rem', color: '#8B0000' }}>Kid's Campus Zone School</h1>
        <p style={{ fontSize: '1.1rem', color: '#555', fontStyle: 'italic', marginBottom: '0.5rem' }}>
          "नए कदम, ऊंची उड़ान"
        </p>
        <p style={{ fontSize: '1rem', color: '#777' }}>Dhengura, Hazaribag, Jharkhand - 825301</p>
      </div>

      <hr style={{ margin: '2rem 0' }} />

      {/* Welcome */}
      <div style={{ marginBottom: '2rem' }}>
        <h2>नमस्ते! आपका स्वागत है।</h2>
        <p>
          नमस्ते और Kids Campus Zone School, ढेंगुरा (हज़ारीबाग) की आधिकारिक वेबसाइट पर आपका हार्दिक स्वागत है!
        </p>
        <p>
          Kids Campus Zone School, हज़ारीबाग के ढेंगुरा में स्थित एक अग्रणी शिक्षण संस्थान है, जो बच्चों के
          उज्जवल भविष्य की नींव रखने के लिए समर्पित है। हमारी टैगलाइन <strong>"नए कदम, ऊंची उड़ान"</strong> हमारे
          इसी लक्ष्य को दर्शाती है — जहाँ हम बच्चों के शुरुआती कदमों को सही दिशा और संस्कार देकर उन्हें
          सफलता की ऊंचाइयों तक पहुँचने के योग्य बनाते हैं।
        </p>
      </div>

      {/* Stats */}
      <div className="grid" style={{ marginBottom: '2rem' }}>
        <div className="stat">
          <h3>2019</h3>
          <p>Year Established</p>
        </div>
        <div className="stat">
          <h3>5+</h3>
          <p>Dedicated Faculty</p>
        </div>
        <div className="stat">
          <h3>Nursery–V</h3>
          <p>Classes Offered</p>
        </div>
      </div>

      <hr style={{ margin: '2rem 0' }} />

      {/* Vision */}
      <div style={{ marginBottom: '2rem' }}>
        <h2>हमारा उद्देश्य (Our Vision)</h2>
        <p>
          हमारा मानना है कि हर बच्चा खास है। हम एक ऐसा सुरक्षित और मनोरंजक वातावरण प्रदान करते हैं
          जहाँ बच्चे खेल-खेल में आधुनिक शिक्षा, अनुशासन और नैतिक मूल्यों को सीख सकें।
        </p>
      </div>

      <hr style={{ margin: '2rem 0' }} />

      {/* Leadership */}
      <div style={{ marginBottom: '2rem' }}>
        <h2>हमारा नेतृत्व (Our Leadership)</h2>

        <div style={{ marginBottom: '1.5rem' }}>
          <h3>🎓 Director: Ghulam Sarwar (गुलाम सरवर)</h3>
          <p>
            सरवर सर के कुशल मार्गदर्शन में स्कूल निरंतर प्रगति कर रहा है। उनका विजन बच्चों को
            गुणवत्तापूर्ण और आधुनिक शिक्षा के साथ-साथ एक मजबूत आधार प्रदान करना है।
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h3>🏫 Principal: Zubeda Khatoon (जुबेदा खातून)</h3>
          <p>
            प्रिंसिपल जुबेदा खातून जी के नेतृत्व में स्कूल का शैक्षिक स्तर और अनुशासन बेहद सराहनीय है।
            बच्चों के सर्वांगीण विकास (Overall Development) पर उनका विशेष ध्यान रहता है।
          </p>
        </div>
      </div>

      <hr style={{ margin: '2rem 0' }} />

      {/* Faculty */}
      <div style={{ marginBottom: '2rem' }}>
        <h2>हमारी टीम (Our Faculty)</h2>
        <p>
          हमारे पास 5 अनुभवी और समर्पित शिक्षकों की एक बेहतरीन टीम है। ये शिक्षक न केवल बच्चों को
          पढ़ाते हैं, बल्कि एक मार्गदर्शक और मित्र की तरह उनके व्यक्तित्व को निखारने में मदद करते हैं।
          हमारा स्टाफ बच्चों की छोटी-छोटी जरूरतों और उनकी सुरक्षा का पूरा ध्यान रखता है।
        </p>
      </div>

      <hr style={{ margin: '2rem 0' }} />

      {/* Why Different */}
      <div style={{ marginBottom: '2rem' }}>
        <h2>हम क्यों अलग हैं? (Why Choose Us?)</h2>
        <ul style={{ lineHeight: '2', paddingLeft: '1.5rem' }}>
          <li>✅ <strong>अनुभवी फैकल्टी:</strong> योग्य और श्रेष्ठ शिक्षक।</li>
          <li>✅ <strong>सुरक्षित वातावरण:</strong> बच्चों के लिए पूरी तरह सुरक्षित और स्वच्छ परिसर।</li>
          <li>✅ <strong>आधुनिक पाठ्यक्रम:</strong> Nursery, LKG और प्राथमिक कक्षाओं के लिए विशेष वर्कशीट और Activity-Based Learning.</li>
          <li>✅ <strong>व्यक्तिगत ध्यान:</strong> हर बच्चे की प्रगति पर बारीकी से नज़र।</li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />

      {/* Contact Info */}
      <div style={{ textAlign: 'center', padding: '1rem', background: '#fff8f0', borderRadius: '8px' }}>
        <p>📍 <strong>पता:</strong> ढेंगुरा, हज़ारीबाग, झारखंड - 825301</p>
        <p>📞 <strong>संपर्क:</strong> +91 9065611819 | +91 9693347953</p>
        <p>📧 <strong>Email:</strong> kidscampuszoneschool2019hzb@gmail.com</p>
      </div>

    </div>
  );
}

export default About;
