<script lang="ts">
	import Prose from '#lib/components/Prose.svelte';
	import { COMPANY, COMPANY_COUNTRY, CONTACT_EMAIL, POLICY_UPDATED } from '#lib';
</script>

<Prose
	title="Privacy policy"
	updated={POLICY_UPDATED}
	intro="Glim works without an account. This page explains, in plain words, what Glim keeps, where, and why."
>
	<h2>Who we are</h2>
	<p>
		Glim is made by <strong>{COMPANY}</strong>, a company registered in {COMPANY_COUNTRY} (“we”, “us”).
		We decide how the information described here is used. You can reach us at
		<a href="mailto:{CONTACT_EMAIL}">{CONTACT_EMAIL}</a>.
	</p>

	<h2>The short version</h2>
	<ul>
		<li>You don’t give us your name, phone number, email or location to use Glim.</li>
		<li>
			Your reports say which suburb they’re for, under a random ID that isn’t linked to who you are.
		</li>
		<li>Your places, settings and report history stay on your phone.</li>
		<li>We don’t sell your information.</li>
	</ul>

	<h2>What stays on your phone</h2>
	<p>
		Your chosen suburb and places, your notification settings, and a list of your recent reports are
		stored only on your phone. They’re removed when you use <strong>Clear my data</strong> in the app
		or uninstall it.
	</p>

	<h2>What we collect, and why</h2>
	<h3>A random ID</h3>
	<p>
		When you first open Glim, it signs in anonymously and gets a random ID. It isn’t linked to your
		name, number or account. We use it to count each person’s report once, to stop abuse, and to let
		you take back your own reports.
	</p>

	<h3>Your reports</h3>
	<p>
		When you report, we store what you reported (for example “power off” or “water back”, or that
		you agreed with others), which suburb it’s for, when, and your random ID. We use reports to:
	</p>
	<ul>
		<li>show the current status of each suburb to everyone using Glim;</li>
		<li>count how many people report in each suburb;</li>
		<li>keep an anonymous history of outages, to understand and predict them.</li>
	</ul>
	<p>
		A suburb’s status, its report counts and its outage history are public in the app. They never
		show who reported.
	</p>

	<h3>Alerts</h3>
	<p>
		If you allow notifications, we store your phone’s notification address (a push token), your
		places and which alerts you want, so we can tell you when something changes. We delete these
		when you turn alerts off or clear your data.
	</p>

	<h3>Suggestions and feedback</h3>
	<p>
		If you suggest a suburb or send feedback in the app, we keep what you write, with your random ID
		and the time, to improve Glim. Please don’t include personal details in these messages.
	</p>

	<h3>What we don’t collect</h3>
	<p>
		Glim doesn’t access your GPS location, contacts, photos or files, and doesn’t use advertising
		IDs. Like any internet service, the providers below may briefly log technical details such as
		your IP address to run and secure their services.
	</p>

	<h2>Who helps us run Glim</h2>
	<ul>
		<li>
			<strong>Google Firebase</strong> (Google Cloud) stores reports, alert settings and feedback. The
			database is in Johannesburg, South Africa; the jobs that send alerts run in Belgium.
		</li>
		<li>
			<strong>Expo</strong> (650 Industries, United States) and
			<strong>Firebase Cloud Messaging</strong> (or Apple’s push service on iPhone) deliver notifications
			to your phone.
		</li>
		<li><strong>Cloudflare</strong> hosts this website.</li>
	</ul>
	<p>
		Some of these providers process information outside Zimbabwe and South Africa. We only use
		providers that protect it with appropriate safeguards, as the law requires.
	</p>

	<h2>How long we keep things</h2>
	<ul>
		<li>
			Reports count towards a suburb’s live status for a few hours, then become part of the
			anonymous outage history, which we keep to study and predict outages.
		</li>
		<li>Alert settings are kept until you turn alerts off or clear your data.</li>
		<li>Feedback is kept for as long as it helps us improve Glim.</li>
	</ul>

	<h2>Your choices and rights</h2>
	<p>
		<strong>Clear my data</strong>, on the You screen in the app, forgets everything on your phone,
		stops alerts and removes your alert settings from our servers, and gives you a new random ID.
		Reports you already sent stay in the anonymous history, but are no longer connected to your
		phone.
	</p>
	<p>
		Under South Africa’s Protection of Personal Information Act (POPIA) and Zimbabwe’s Cyber and
		Data Protection Act, you can ask to see, correct or delete personal information we hold about
		you, and object to how we use it. Email
		<a href="mailto:{CONTACT_EMAIL}">{CONTACT_EMAIL}</a>. Because Glim doesn’t know who you are, we
		may ask for details from the app, such as your Glimmer name, to find your information.
	</p>
	<p>
		If you’re unhappy with how we handle your information, you can complain to the Information
		Regulator in South Africa, or to POTRAZ, Zimbabwe’s data protection authority.
	</p>

	<h2>Children</h2>
	<p>
		Glim is for a general audience and isn’t aimed at children. Because it doesn’t ask who you are,
		we don’t knowingly collect personal information about children.
	</p>

	<h2>Security</h2>
	<p>
		Information travels encrypted, and our database only lets each phone change its own reports and
		settings. No system is perfectly secure, so we collect as little as we can.
	</p>

	<h2>Changes to this policy</h2>
	<p>
		If we change this policy, we’ll update the date at the top. For important changes, we’ll also
		let you know in the app.
	</p>
</Prose>
