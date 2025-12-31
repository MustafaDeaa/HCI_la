const topicMessages = {
    space: "Hello! Welcome to our Space Exploration website. Explore the wonders of the universe with us!",
    mathematics: "Hello! Welcome to our Mathematics Exploration website. Dive into the mysteries of numbers and equations with us!",
    physics: "Hello! Welcome to our Physics Exploration website. Discover the laws of nature and motion with us!"
};

function displayTopic(topic) {
    alert(topicMessages[topic]);
}
function displayspace() {
    displayTopic('space');
}
function displaymathematics() {
    displayTopic('mathematics');
}
function displayphysics() {
    displayTopic('physics');
}  

const text=[
        // mathematics
        {id:'KhanAcademy', url:'https://www.youtube.com/@KhanAcademy', desc:`<h4>Khan Academy</h4>
                            <p>Comprehensive math lessons from basic to advanced calculus</p>`},
        {id:'3Blue1Brown', url:'https://www.youtube.com/@3blue1brown', desc:`<h4>3Blue1Brown</h4>
                            <p>Beautiful visualizations and explanations of mathematical concepts</p>`},
        {id:'PatrickJMT', url:'https://www.youtube.com/@PatrickJMT', desc:`<h4>Patrick JMT</h4>
                            <p>Clear explanations of calculus algebra and pre-calculus topics</p>`},
        {id:'ProfessorDaveExplains', url:'https://www.youtube.com/@ProfessorDaveExplains', desc:`<h4>Professor Dave Explains</h4>
                            <p>Quick and concise mathematics tutorials</p>`},
        // space
        {id:'NASA', url:'https://www.youtube.com/@NASA', desc:`<h4>NASA </h4> 
                    <p> NASA channel with space missions, discoveries, and educational content</p>`},
        {id:'kurzgesagt', url:'https://www.youtube.com/@kurzgesagt', desc:`<h4>Kurzgesagt</h4>
                    <p>Educational animations about space, physics, and science</p>`},                                  
        {id:'CrashCourse', url:'https://www.youtube.com/@CrashCourse', desc:`<h4>Crash Course</h4>
                    <p>High-quality educational content on astronomy and space science</p> `},                            
        {id:'ScienceChannel', url:'https://www.youtube.com/@ScienceChannel', desc:`<h4>Science Channel</h4>
                    <p>Documentary-style space and astronomy content</p>`},
        // physics
        {id:'KhanAcademy', url:'https://www.youtube.com/@KhanAcademy', desc:`<h4>Khan Academy</h4>
                            <p>Complete physics courses from mechanics to quantum mechanics</p>`},
        {id:'CrashCourse', url:'https://www.youtube.com/@CrashCourse', desc:`<h4>Crash Course</h4>
                            <p>Engaging physics lessons covering all major topics</p>`},
        {id:'PBS', url:'https://www.youtube.com/@PBS', desc:`<h4>PBS Space Time</h4>
                            <p>In-depth exploration of modern physics and cosmology</p>`},
        {id:'kurzgesagt', url:'https://www.youtube.com/@kurzgesagt', desc:`<h4>Kurzgesagt</h4>
                            <p>Beautifully animated explanations of physics concepts</p>`},
];

function displaytext(){
    for(let i=0;i<text.length;i++){
        const item = text[i];
        // const element = document.getElementById(item.id);
        const test =document.getElementById(item.id);
        if(!test) continue;

        // Make the whole card clickable by wrapping the content in the anchor.
        // element.innerHTML = `<a href="${item.url}" target="_blank">${item.desc}</a>`;
        test.innerHTML = `<a href="${item.url}" target="_blank">${item.desc}</a>`;
    }   
}
displaytext();
