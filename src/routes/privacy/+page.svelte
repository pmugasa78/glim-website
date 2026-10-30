<script lang="ts">
	import { resolve } from '$app/paths';
	import Prose from '#lib/components/Prose.svelte';
	import {
		COMPANY,
		COMPANY_COUNTRY,
		COMPANY_REGISTRATION,
		CONTACT_EMAIL,
		POLICY_UPDATED
	} from '#lib';
</script>

<Prose
	title="Privacy policy"
	updated={POLICY_UPDATED}
	intro="Glim works without an account, until you post an update for your neighbours. This page explains, in plain words, what Glim keeps, where, and why."
>
	<h2>Who we are</h2>
	<p>
		Glim is made by <strong>{COMPANY}</strong>, a company registered in {COMPANY_COUNTRY} under registration
		number {COMPANY_REGISTRATION} (“we”, “us”). We decide how the information described here is used.
		You can reach us at
		<a href="mailto:{CONTACT_EMAIL}">{CONTACT_EMAIL}</a>.
	</p>

	<h2>The short version</h2>
	<ul>
		<li>
			You don’t give us your name, phone number, email or location to use Glim. Only posting updates
			needs a Google sign-in, and neighbours never see your name or email.
		</li>
		<li>
			Your reports say which suburb they’re for, under a random ID that isn’t linked to who you are.
		</li>
		<li>Updates you post show only your Glimmer name, and are deleted after 30 days.</li>
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
		When you first open Glim, it signs in anonymously and gets a random ID. On its own, it isn’t
		linked to your name, number or email. We use it to count each person’s report once, to stop
		abuse, and to let you take back your own reports. It also gives you your Glimmer name (for
		example “Glimmer #4821”), which is what neighbours see on your updates.
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

	<h3>Updates in your suburb’s rooms</h3>
	<p>
		Each suburb has a room for power, water and internet, where neighbours share short updates. When
		you post one, we store what you wrote, which room it’s in, when, and your random ID. Updates are
		public in the app, shown with your Glimmer name, and are deleted after 30 days. Glim doesn’t
		accept links or phone numbers in updates; please don’t include other personal details either.
	</p>
	<p>
		If you report someone’s update as unkind, unsafe or spam, we store that you did, with your
		random ID, so that updates reported by several people are hidden.
	</p>

	<h3>What’s causing an outage</h3>
	<p>
		While the power is off, you can say what you think is causing it, such as load-shedding or a
		fault. We store your answer with your random ID. The app shows only how many people gave each
		answer.
	</p>

	<h3>Google sign-in, if you post</h3>
	<p>
		Before your first update, Glim asks you to sign in with Google, so that updates come from real
		people and someone whose updates keep being hidden can’t simply start again. Google shares your
		name, email address, profile picture and Google account ID with us, and we keep them with your
		random ID. We use them only to keep you signed in and to prevent abuse. We never show them to
		other people or use them for marketing, and Glim gets no other access to your Google account.
		Google’s own privacy policy covers how Google handles the sign-in.
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

	<h2>Joining the beta</h2>
	<p>
		If you sign up on this website to test Glim before launch, we keep your email address and when
		you signed up. We use it only to invite you to test the app and to send you updates about the
		beta. To invite you, we add your email to Glim’s tester list on Google Play (or Apple’s
		TestFlight on iPhone). We delete beta sign-ups once the beta ends, or sooner if you ask.
	</p>

	<h2>Who helps us run Glim</h2>
	<ul>
		<li>
			<strong>Google Firebase</strong> (Google Cloud) stores reports, updates, alert settings, feedback
			and Google sign-ins. The database is in Johannesburg, South Africa; the jobs that send alerts run
			in Belgium.
		</li>
		<li>
			<strong>Expo</strong> (650 Industries, United States) and
			<strong>Firebase Cloud Messaging</strong> (or Apple’s push service on iPhone) deliver notifications
			to your phone.
		</li>
		<li><strong>Cloudflare</strong> hosts this website and stores beta sign-ups.</li>
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
		<li>Updates are deleted 30 days after you post them, or when you clear your data.</li>
		<li>Your Google sign-in is kept until you clear your data.</li>
		<li>Alert settings are kept until you turn alerts off or clear your data.</li>
		<li>Feedback is kept for as long as it helps us improve Glim.</li>
	</ul>

	<h2>Your choices and rights</h2>
	<p>
		<strong>Clear my data</strong>, on the You screen in the app, forgets everything on your phone,
		stops alerts and removes your alert settings from our servers, deletes your account (including
		your Google sign-in, if you have one) and the updates you posted, and gives you a new random ID.
		Reports and answers about outages you already sent stay in the anonymous history, but are no
		longer connected to your phone or to you. Without the app, you can
		<a href={resolve('/delete-account')}>ask us to delete your account</a> by email.
	</p>
	<p>
		Under South Africa’s Protection of Personal Information Act (POPIA) and Zimbabwe’s Cyber and
		Data Protection Act, you can ask to see, correct or delete personal information we hold about
		you, and object to how we use it. Email
		<a href="mailto:{CONTACT_EMAIL}">{CONTACT_EMAIL}</a>. Unless you’ve signed in with Google, Glim
		doesn’t know who you are, so we may ask for details from the app, such as your Glimmer name, to
		find your information.
	</p>
	<p>
		If you’re unhappy with how we handle your information, you can complain to the Information
		Regulator in South Africa, or to POTRAZ, Zimbabwe’s data protection authority.
	</p>

	<h2>Children</h2>
	<p>
		Glim is for a general audience and isn’t aimed at children. We don’t knowingly collect personal
		information about children.
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
