import Footer from "@/features/navigation/Footer/Footer";

import styles from "../terms-condition/TermAndCondition.module.scss";

export default function PrivacyPolicy() {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.blobOne} />
				<div className={styles.blobTwo} />
				<h1>Privacy Policy</h1>

				<div className={styles.content}>
					<div className={styles.unparsed}>
						<p style={{ textAlign: "right" }}>
							Last updated date (Effective Date) <br /> December 12, 2024
						</p>
					</div>
					<div className={styles.unparsed}>
						<p>
							We value your privacy and are committed to protecting your
							personal data. This Privacy Policy explains how we collect, use,
							and protect your information. By using our website and services,
							you agree to the terms outlined in this Privacy Policy.
						</p>
					</div>
					<div className={styles.unparsed}>
						<h2>1. Information Collection and Use</h2>
						<p>
							To enhance your experience, we may ask you to provide certain
							personally identifiable information, including but not limited to
							your Privacy Policy
						</p>
						<p>
							name, phone number, email address, and postal address. This
							information is used to provide and improve the Services, as well
							as to identify and contact you.
						</p>
					</div>
					<div className={styles.unparsed}>
						<h2>2. Log Data</h2>
						<p>
							Whenever you visit our site, we automatically collect information
							that your browser sends to us, called Log Data. This Log Data may
							include your IP address, browser type and version, the pages of
							our site that you visit, the time and date of your visit, the time
							spent on those pages, and other statistics.
						</p>
					</div>
					<div className={styles.unparsed}>
						<h2>3. Cookies</h2>
						<p>
							We use cookies—small files with data that are sent to your browser
							and stored on your computer&apos;s hard drive. Cookies help us
							collect information and improve the Service. You have the option
							to accept or refuse these cookies and to know when a cookie is
							sent to your computer. If you choose to refuse our cookies, you
							may not be able to use some portions of the Service.
						</p>
					</div>
					<div className={styles.unparsed}>
						<h2>4. Service Providers</h2>
						<p>
							We may employ third-party companies and individuals for the
							following reasons:
						</p>
						<ul>
							<li>To facilitate the provision of our Services;</li>
							<li>To provide Services on our behalf;</li>
							<li>To perform Service-related tasks; or</li>
							<li>To help us analyze how our Service is used.</li>
						</ul>
						<p>
							These third parties may have access to your Personal Information
							to perform specific tasks on our behalf. However, they are
							obligated not to disclose or use your information for any other
							purpose.
						</p>
					</div>
					<div className={styles.unparsed}>
						<h2>5. Security</h2>
						<p>
							We value your trust in providing us with your Personal Information
							and strive to use commercially acceptable means to protect it.
							However, please remember that no method of electronic transmission
							or storage over the Internet is 100% secure and reliable, and we
							cannot guarantee absolute security.
						</p>
					</div>
					<div className={styles.unparsed}>
						<h2>6. Links to Other Sites</h2>
						<p>
							Our Service may contain links to other sites. If you click on a
							third-party link, you will be directed to that site. Note that
							these external sites are not operated by us. Therefore, we
							strongly advise you to review the Privacy Policy of these
							websites. We have no control over, and assume no responsibility
							for, the content, privacy policies, or practices of any
							third-party sites or services.
						</p>
					</div>
					<div className={styles.unparsed}>
						<h2>7. Children&apos;s Privacy</h2>
						<p>
							Our Services are not intended for individuals under the age of 18.
							We do not knowingly collect personally identifiable information
							from children under 18. In the event that we discover a child
							under 18 has provided us with personal information, we immediately
							delete it from our servers. If you are a parent or guardian and
							become aware that your child has provided us with personal
							information, please contact us so that we can take necessary
							actions.
						</p>
					</div>
					<div className={styles.unparsed}>
						<h2>8. Your Rights and Choices</h2>
						<p>
							You have certain rights regarding your personal information. You
							may:
						</p>
						<ul>
							<li>
								Access and Update: Access or update your personal information
								through your account settings.
							</li>
							<li>
								Delete Your Account: Request the deletion of your account and
								personal data by contacting us.
							</li>
							<li>
								Opt-Out of Communications: Unsubscribe from promotional
								communications at any time.
							</li>
						</ul>
					</div>
					<div className={styles.unparsed}>
						<h2>9. Changes to This Privacy Policy</h2>
						<p>
							We may periodically update our Privacy Policy to reflect changes
							in our practices or for legal reasons. We will notify you of any
							changes by posting the updated Privacy Policy on this page. These
							changes are effective immediately after being posted on this page.
						</p>
					</div>
					<div className={styles.unparsed}>
						<h2>10. Contact Us</h2>
						<p>
							If you have any questions or suggestions about our Privacy Policy,
							please do not hesitate to contact us:
						</p>
						<ul>
							<li>Email: info@aisc.online</li>
						</ul>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
