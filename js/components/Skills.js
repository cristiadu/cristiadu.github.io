import React from 'react';

// Create component that renders all skills from the json file
const Skills = () => {
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        axios.get('json/skills.json')
            .then(response => {
                setSkills(response.data);
            });
    }, []);

    return (
        <article id="skills" class="container">
            <div class="row">
                <div class="page-header">
                    <h1>Main Skills</h1>
                </div>
            </div>
            <div class="row">
                {skills.map((skill, index) => (
                    <div class="col-md-3 col-xs-6" key={index}>
                        <span class="thumbnail">
                            <img class="img-responsive" src={'images/' + skill.image} alt={skill.text} />
                        </span>
                    </div>
                ))}
            </div>
        </article>
    );
};

export default Skills;