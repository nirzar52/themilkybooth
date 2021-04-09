import React from "react";

export default function SkillTest() {
    return (
        <section className="cell large-6 skill-test">
            <legend className="skill-title">Skill Test</legend>
            <form className="grid-y" action="#">
                <label for="skillTest" id="skillTest">import_question_here</label>
                <section className="grid-x">
                    <section className="cell large-3"></section>
                    <section className="cell large-6">
                        <input className="input-box" type="text" name="skillTestInput" id="skillTestInput" placeholder="Answer of the question" />
                    </section>
                    <section className="cell large-3"></section>
                </section>
                <p className="error-msg" id="skillTestError">error_here</p>
            </form>
        </section>
    )
}