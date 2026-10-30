<script lang="ts">
	import { resolve } from '$app/paths';
	import Prose from '#lib/components/Prose.svelte';
	import { COMPANY, COMPANY_COUNTRY, COMPANY_REGISTRATION, CONTACT_EMAIL } from '#lib';
</script>

<Prose title="Contact" intro="Questions, problems or ideas? We read every message.">
	<a class="email" href="mailto:{CONTACT_EMAIL}">{CONTACT_EMAIL}</a>

	<h2>Help with the app</h2>
	<p>
		Tell us what happened, your phone model, and the suburb you were looking at. A screenshot helps.
		We usually reply within a few working days.
	</p>

	<h2>A suburb is missing</h2>
	<p>
		The quickest way is in the app: search for it and tap <strong>Suggest</strong>, or go to
		<strong>You → Suggest a missing suburb</strong>.
	</p>

	<h2>Privacy requests</h2>
	<p>
		To see, correct or delete information about you, email us with “Privacy” in the subject. Our
		<a href={resolve('/privacy')}>privacy policy</a> explains what Glim keeps. To delete your
		account, see <a href={resolve('/delete-account')}>Delete your account</a>.
	</p>

	<h2>Utilities, councils and partners</h2>
	<p>
		If you’d like to work with us on outage information for your area, we’d love to hear from you.
	</p>

	<h2>Who makes Glim</h2>
	<p>
		Glim is made by <strong>{COMPANY}</strong>, a private company registered in {COMPANY_COUNTRY}
		(registration number {COMPANY_REGISTRATION}). For anything about the company, email
		<a href="mailto:{CONTACT_EMAIL}">{CONTACT_EMAIL}</a>.
	</p>
</Prose>

<style>
	.email {
		display: inline-block;
		margin-top: 24px;
		padding: 14px 22px;
		border-radius: 18px;
		background: var(--sun);
		box-shadow: 0 5px 0 var(--sun-edge);
		font-size: 20px;
		font-weight: 900;
		text-decoration: none;
		overflow-wrap: anywhere;
	}
</style>
