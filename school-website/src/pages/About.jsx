function About() {
  return (
    <div className="page-about container section" style={{ marginTop: 'var(--header-height)' }}>

      {/* Hero Banner / Logo Selection */}
      <div style={{ textAlign: 'center', padding: '2rem 0' }}>
        <div className="about-logo-crop-container" style={{ 
          width: '320px', 
          height: '240px', 
          overflow: 'hidden', 
          margin: '0 auto 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'white',
          borderRadius: '20px',
          boxShadow: '0 15px 35px rgba(0,0,0,0.08)'
        }}>
          <img 
            src="/school-logo.png" 
            alt="Kid's Campus Zone School Logo" 
            style={{ width: '130%', marginTop: '0' }} 
          />
        </div>
        <h1 style={{ fontSize: '3rem', color: '#B21E24', marginBottom: '0.5rem', fontWeight: '900' }}>Kid's Campus Zone School</h1>
        <p style={{ fontSize: '1.4rem', color: '#555', fontStyle: 'italic', fontWeight: '600' }}>
          "Next Step, High Flight" | "नए कदम, ऊंची उड़ान"
        </p>
        <p style={{ fontSize: '1.1rem', color: '#777' }}>Dhengura, Hazaribag, Jharkhand - 825301</p>
      </div>

      <hr style={{ margin: '3rem 0', opacity: '0.1' }} />

      {/* Welcome Section - Bilingual */}
      <div className="about-section" style={{ marginBottom: '3.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
          <div className="lang-en">
            <h2 style={{ color: '#1a365d', borderLeft: '5px solid #FFD700', paddingLeft: '15px' }}>Welcome to Our School</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              Welcome to the official portal of **Kid's Campus Zone School**, Dhengura, Hazaribag. 
              We are a premier educational institution dedicated to building a strong foundation for 
              every child's future. Our motto, **"Next Step, High Flight"**, reflects our commitment 
              to nurturing young minds from their first steps to the heights of success.
            </p>
          </div>
          <div className="lang-hi" style={{ background: 'rgba(255,215,0,0.05)', padding: '20px', borderRadius: '15px' }}>
            <h2 style={{ color: '#B21E24', borderLeft: '5px solid #B21E24', paddingLeft: '15px' }}>नमस्ते! आपका स्वागत है।</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              किड्स कैंपस जोन स्कूल, ढेंगुरा (हज़ारीबाग) की आधिकारिक वेबसाइट पर आपका हार्दिक स्वागत है! 
              हम बच्चों के उज्जवल भविष्य की नींव रखने के लिए समर्पित हैं। हमारी टैगलाइन **"नए कदम, ऊंची उड़ान"** 
              हमारे इसी लक्ष्य को दर्शाती है — जहाँ हम बच्चों को सही दिशा और संस्कार देकर सफलता की ऊंचाइयों 
              तक पहुँचने के योग्य बनाते हैं।
            </p>
          </div>
        </div>
      </div>

      <hr style={{ margin: '3rem 0', opacity: '0.1' }} />


      {/* Vision & Mission - Bilingual */}
      <div style={{ marginBottom: '3.5rem', padding: '3rem', background: '#1a365d', color: 'white', borderRadius: '30px', boxShadow: '0 20px 40px rgba(26,54,93,0.2)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          <div>
            <h2 style={{ color: '#FFD700' }}>Our Vision</h2>
            <p style={{ fontSize: '1.1rem', opacity: '0.9' }}>
              Every child is unique. We provide a safe, fun, and creative environment where 
              children learn through multi-sensory experiences, modern technology, and 
              strong moral values. We aim to create confident lifelong learners.
            </p>
          </div>
          <div style={{ borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '2rem' }}>
            <h2 style={{ color: '#FFD700' }}>हमारा उद्देश्य</h2>
            <p style={{ fontSize: '1.1rem', opacity: '0.9' }}>
              हमारा मानना है कि हर बच्चा खास है। हम एक ऐसा सुरक्षित और मनोरंजक वातावरण प्रदान करते हैं 
              जहाँ बच्चे खेल-खेल में आधुनिक शिक्षा, अनुशासन और नैतिक मूल्यों को सीख सकें। हमारा लक्ष्य 
              बच्चों में आत्मविश्वास और सीखने की ललक पैदा करना है।
            </p>
          </div>
        </div>
      </div>

      {/* Leadership - Bilingual */}
      <div style={{ marginBottom: '3.5rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2.5rem', fontSize: '2rem' }}>Our Leadership | हमारा नेतृत्व</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
          <div className="card" style={{ padding: '2.5rem', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
              <span style={{ fontSize: '2.5rem' }}>🎓</span>
              <div>
                <h3 style={{ margin: 0 }}>Ghulam Sarwar</h3>
                <p style={{ margin: 0, color: '#B21E24', fontWeight: 'bold' }}>Director | निदेशक</p>
              </div>
            </div>
            <p style={{ marginBottom: '15px', color: '#555' }}>
              Under the visionary leadership of Mr. Sarwar, the school has achieved milestones in 
              early childhood education. His focus remains on quality, modernization, and 
              accessibility for every child.
            </p>
            <p style={{ color: '#777', fontStyle: 'italic', borderTop: '1px solid #eee', paddingTop: '10px' }}>
              सरवर सर के कुशल मार्गदर्शन में स्कूल निरंतर प्रगति कर रहा है। उनका विजन बच्चों को 
              गुणवत्तापूर्ण और आधुनिक शिक्षा के साथ-साथ एक मजबूत आधार प्रदान करना है।
            </p>
          </div>

          <div className="card" style={{ padding: '2.5rem', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
              <span style={{ fontSize: '2.5rem' }}>🏫</span>
              <div>
                <h3 style={{ margin: 0 }}>Zubeda Khatoon</h3>
                <p style={{ margin: 0, color: '#B21E24', fontWeight: 'bold' }}>Principal | प्रधानाध्यापिका</p>
              </div>
            </div>
            <p style={{ marginBottom: '15px', color: '#555' }}>
              Principal Zubeda Khatoon ensures academic excellence and strict discipline. She 
              is dedicated to the overall personality development of students through 
              individual attention and care.
            </p>
            <p style={{ color: '#777', fontStyle: 'italic', borderTop: '1px solid #eee', paddingTop: '10px' }}>
              प्रिंसिपल जुबेदा खातून जी के नेतृत्व में स्कूल का शैक्षिक स्तर और अनुशासन सराहनीय है। 
              बच्चों के सर्वांगीण विकास (Overall Development) पर उनका विशेष ध्यान रहता है।
            </p>
          </div>
        </div>
      </div>

      <hr style={{ margin: '3rem 0', opacity: '0.1' }} />

      {/* Why Different - Bilingual */}
      <div style={{ marginBottom: '3.5rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2.5rem' }}>Why Choose Us? | हमें क्यों चुनें?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {[
            { en: "Experienced Faculty", hi: "अनुभवी शिक्षक", icon: "👩‍🏫" },
            { en: "Safe Environment", hi: "सुरक्षित वातावरण", icon: "🛡️" },
            { en: "Modern Curriculum", hi: "आधुनिक शिक्षा", icon: "📚" },
            { en: "Personal Attention", hi: "व्यक्तिगत ध्यान", icon: "🎯" }
          ].map((item, i) => (
            <div key={i} className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{item.icon}</div>
              <h4 style={{ margin: '5px 0' }}>{item.en}</h4>
              <p style={{ margin: 0, color: '#777' }}>{item.hi}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Banner - Bilingual Redesign */}
      <div style={{ 
        marginTop: '4rem',
        padding: '3.5rem 2rem', 
        background: 'linear-gradient(135deg, #1a365d 0%, #0d1b2e 100%)', 
        borderRadius: '30px',
        color: 'white',
        textAlign: 'center',
        boxShadow: '0 20px 50px rgba(26,54,93,0.3)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative background element */}
        <div style={{ 
          position: 'absolute', 
          top: '-50px', 
          right: '-50px', 
          width: '200px', 
          height: '200px', 
          background: 'rgba(255,215,0,0.1)', 
          borderRadius: '50%',
          filter: 'blur(40px)'
        }}></div>

        <h2 style={{ color: '#FFD700', fontSize: '2.2rem', marginBottom: '1rem' }}>Connect With Us | संपर्क करें</h2>
        <p style={{ opacity: '0.8', marginBottom: '3rem', fontSize: '1.1rem' }}>We are here to answer your questions and welcome your child to our family.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div className="contact-card" style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ fontSize: '2rem', marginBottom: '15px' }}>📍</div>
            <h4 style={{ color: '#FFD700', margin: '0 0 10px 0' }}>Address | पता</h4>
            <p style={{ margin: 0, lineHeight: '1.6' }}>Dhengura, Hazaribag,<br />Jharkhand - 825301</p>
          </div>

          <div className="contact-card" style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ fontSize: '2rem', marginBottom: '15px' }}>📞</div>
            <h4 style={{ color: '#FFD700', margin: '0 0 10px 0' }}>Contact | संपर्क</h4>
            <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: 'bold' }}>+91 90656 11819</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '0.9rem', opacity: '0.7' }}>+91 96933 47953</p>
          </div>

          <div className="contact-card" style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ fontSize: '2rem', marginBottom: '15px' }}>📧</div>
            <h4 style={{ color: '#FFD700', margin: '0 0 10px 0' }}>Email | ईमेल</h4>
            <p style={{ margin: 0, fontSize: '0.9rem', overflowWrap: 'anywhere' }}>kidscampuszoneschool2019hzb<br />@gmail.com</p>
          </div>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <a href="/contact" className="btn btn-primary" style={{ padding: '15px 40px', borderRadius: '50px', fontSize: '1.1rem', background: '#B21E24', borderColor: '#B21E24' }}>
            Visit Contact Page | संपर्क करें
          </a>
        </div>
      </div>

    </div>
  );
}

export default About;
