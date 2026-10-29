<script lang="ts">
	import { resolve } from '$app/paths';
	import Prose from '#lib/components/Prose.svelte';
	import { COMPANY, COMPANY_COUNTRY, CONTACT_EMAIL, POLICY_UPDATED } from '#lib';
</script>

<Prose
	title="Terms of use"
	updated={POLICY_UPDATED}
	intro="By using Glim you agree to these terms. They’re short, and written to be read."
>
	<h2>What Glim is</h2>
	<p>
		Glim, made by <strong>{COMPANY}</strong>, shows whether the power, water or internet is on in a
		suburb, based on reports from people who use it. It’s free.
	</p>

	<h2>Reports are a guide, not an official notice</h2>
	<p>
		Statuses come from the public, not from ZESA, ZINWA, councils or internet providers, and Glim
		isn’t connected to any of them. Reports can be late, incomplete or wrong. Use Glim as a helpful
		guide, and don’t rely on it for safety, medical or business-critical decisions. For emergencies
		or official outage information, contact the provider directly.
	</p>

	<h2>Using Glim fairly</h2>
	<p>Please only report what you can see where you are. Don’t:</p>
	<ul>
		<li>send reports you know are false, or for suburbs you aren’t in;</li>
		<li>use scripts, bots or many devices to send reports;</li>
		<li>try to break, overload or get around how Glim works;</li>
		<li>send abusive or unlawful content through suggestions or feedback.</li>
	</ul>
	<p>
		We may ignore, remove or limit reports and stop access for anyone who breaks these rules, to
		keep Glim useful for everyone.
	</p>

	<h2>Your privacy</h2>
	<p>
		Our <a href={resolve('/privacy')}>privacy policy</a> explains what Glim collects and how it’s used.
	</p>

	<h2>No guarantees</h2>
	<p>
		We work to keep Glim running and accurate, but we provide it “as is”, without promising it will
		always be available, error-free or correct. We may change or stop features at any time.
	</p>

	<h2>Limits on our responsibility</h2>
	<p>
		As far as the law allows, {COMPANY} isn’t responsible for losses that come from relying on reports
		in Glim, or from Glim being unavailable. Nothing in these terms limits rights you have under consumer
		protection law that can’t be limited.
	</p>

	<h2>Changes</h2>
	<p>
		We may update these terms. We’ll change the date at the top, and for important changes let you
		know in the app. If you keep using Glim after a change, you accept the new terms.
	</p>

	<h2>Law and contact</h2>
	<p>
		These terms are governed by the laws of {COMPANY_COUNTRY}. Questions? Email
		<a href="mailto:{CONTACT_EMAIL}">{CONTACT_EMAIL}</a>.
	</p>
</Prose>
