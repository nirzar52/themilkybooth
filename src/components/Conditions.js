import { React, Component } from "react";
import { Accordion, AccordionItem, AccordionContent, AccordionTitle } from '@bit/digiaonline.react-foundation.accordion';

export default class Conditions extends Component {
    constructor() {
        super();
        this.state = {
            activeIndex: 1
        }
    }

    render() {
        return (
            <section className="grid-container">

                <Accordion>
                    <AccordionItem isActive={this.state.activeIndex === 1} onClick={(e) => { this.setState({ activeIndex: 1 }) }}>
                        <AccordionTitle>1. How does the Photo Booth service work?</AccordionTitle>
                        <AccordionContent isActive={this.state.activeIndex === 1} onClick={(e) => { this.setState({ activeIndex: 1 }) }}>
                            Photo Booth offers a digital photography service via the Photo Booth. You can have your picture taken in the Photo Booth (the “Photo”). You’ll have to provide us with your age, and email address or your mobile phone number, so we can send your photo to you. For that you have to click your photo, then we’ll send it to you by email. You understand and agree that we may also display your photo on the screen outside the Photo Booth. In addition, you agree that we and a partner company may send you advertising and marketing materials with recommendations and information that might be of interest to you. Users under the age of 16 are not eligible for the activity without a guardians permission.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem isActive={this.state.activeIndex === 2} onClick={(e) => { this.setState({ activeIndex: 2 }) }}>
                        <AccordionTitle>
                            2. Content and Rights of Publicity</AccordionTitle>
                        <AccordionContent isActive={this.state.activeIndex === 2} onClick={(e) => { this.setState({ activeIndex: 2 }) }}>Once the user uploads photo, the company has ownership of those photos. You give us permission to take your picture and share it on the Photo Booth, and you agree that this action does not violate your rights of publicity or privacy. Nothing in these terms will restrict any rights that you have to use and exploit your own image subject to these Terms. You agree not to use the Photo Booth in any manner that is indecent, pornographic, or in violation of any laws.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem isActive={this.state.activeIndex === 3} onClick={(e) => { this.setState({ activeIndex: 3 }) }}>
                        <AccordionTitle>3. Information collection from all users.</AccordionTitle>
                        <AccordionContent isActive={this.state.activeIndex === 3} onClick={(e) => { this.setState({ activeIndex: 3 }) }}>
                            We will obtain personal data about you when you visit us.  We take reasonable measures to protect the information that we collect from or about you from unauthorized access, use or disclosure. Please be aware, however, that no method of transmitting information over the Internet or storing information is completely secure. Accordingly, we cannot guarantee the absolute security of any information.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem isActive={this.state.activeIndex === 4} onClick={(e) => { this.setState({ activeIndex: 4 }) }}>
                        <AccordionTitle>4. Choice and Opt-out.</AccordionTitle>
                        <AccordionContent isActive={this.state.activeIndex === 4} onClick={(e) => { this.setState({ activeIndex: 4 }) }}>
                            When you register your emails with us, we will send you weekly newsletters, contact you about products and services we think may be of interest to you. If you agree to us providing you with this information, you can always opt-out at a later date. We provide you with a choice of whether to receive certain emails. We provide you the opportunity to 'opt-out'. If you are a user of the Sites and you no longer wish to receive, email, mail, or telephone calls from us or have your email address, you may opt-out of receiving email.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem isActive={this.state.activeIndex === 5} onClick={(e) => { this.setState({ activeIndex: 5 }) }}>
                        <AccordionTitle>5. Non-disclosure</AccordionTitle>
                        <AccordionContent isActive={this.state.activeIndex === 5} onClick={(e) => { this.setState({ activeIndex: 5 }) }}>
                            We do not sell, trade, or otherwise transfer to third parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, as long as these parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours and others’ rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem isActive={this.state.activeIndex === 6} onClick={(e) => { this.setState({ activeIndex: 6 }) }}>
                        <AccordionTitle>6. Winners will be entitled to participate in a lucky draw if they meet the following terms and conditions:</AccordionTitle>
                        <AccordionContent isActive={this.state.activeIndex === 6} onClick={(e) => { this.setState({ activeIndex: 6 }) }}>
                            <p>- By participating this competition (draw), the participant is indicating his/her agreement to be bound by these terms and conditions.</p>
                            <p>- There is no fee to participate in this lucky draw.</p>
                            <p>- Users can participate in the lucky draw if the user has taken the photo in the photo booth application. Users under the age of 16 are not eligible for the activity without a guardians permission. </p>
                            <p>- We will not accept any responsibilities if contact details provided are incomplete or inaccurate.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem isActive={this.state.activeIndex === 7} onClick={(e) => { this.setState({ activeIndex: 7 }) }}>
                        <AccordionTitle>7. The rules of Photo Booth lucky draw and how to enter are as follows:</AccordionTitle>
                        <AccordionContent isActive={this.state.activeIndex === 7} onClick={(e) => { this.setState({ activeIndex: 7 }) }}>
                            <p>- Providing personal information on form page, if you are under 16 years old, you must provide the consent of the guardian.</p>
                            <p>- Enter the Photo Booth, take a photo.</p>
                            <p>- Edit with filters and effects to make the photo look awesome.</p>
                            <p>- Share your photo. </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem isActive={this.state.activeIndex === 8} onClick={(e) => { this.setState({ activeIndex: 8 }) }}>
                        <AccordionTitle>8. Other terms & conditions:</AccordionTitle>
                        <AccordionContent isActive={this.state.activeIndex === 8} onClick={(e) => { this.setState({ activeIndex: 8 }) }}>
                            <p>The prize is as stated and no cash or other alternatives will be offered. The prizes are not transferable. Prizes are subject to availability and we reserve the right to substitute any prize with another of equivalent value without giving any notice.</p>
                            <p>We will randomly choose one as the lucky customer who can get a free dairy package.</p>
                            <p>Winners will be notified on our website or by email. If the winner cannot be contacted or does not claim the prize within 14 days of notification, we reserve the right to withdraw the prize from the winner and to pick a replacement winner.</p>
                            <p>Our decision in respect of all matters to do with the Lucky Draw will be final and no correspondence will be entered into.</p>
                            <p>The winner agrees to the use of his/her name and image in any publicity material, as well as their entry. </p>
                            <p>We shall have the right, at its sole discretion and at any time, to change or modify these terms and conditions, such change shall be effective immediately upon posting to this webpage.</p>
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </section>
        )
    }
}