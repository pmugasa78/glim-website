<script lang="ts">
	import { resolve } from '$app/paths';
	import Prose from '#lib/components/Prose.svelte';
	import { COMPANY, CONTACT_EMAIL } from '#lib';
</script>

<Prose
	title="Delete your account"
	intro="You can delete your Glim account and what you posted at any time, in the app or by email."
>
	<h2>In the app</h2>
	<ol>
		<li>Open Glim and tap the bee in the top corner to open the <strong>You</strong> screen.</li>
		<li>
			Under <strong>Privacy</strong>, tap <strong>Delete my data</strong>, then tap again to
			confirm.
		</li>
	</ol>
	<p>This deletes your account straight away. You need to be online for it to reach our servers.</p>

	<h2>By email</h2>
	<p>
		If you no longer have the app, email
		<a href="mailto:{CONTACT_EMAIL}?subject=Delete%20my%20account">{CONTACT_EMAIL}</a> with
		<strong>Delete my account</strong> in the subject. Tell us the Google account email you signed in
		with to post updates, or your Glimmer name (for example “Glimmer #4821”). We’ll delete your account
		within 30 days and let you know when it’s done.
	</p>

	<h2>What gets deleted</h2>
	<ul>
		<li>Your account, including your Google sign-in (your name, email and profile picture).</li>
		<li>The updates you posted in suburb rooms.</li>
		<li>Your alert settings and your phone’s notification address.</li>
		<li>
			In the app: your places, settings and report history, which are kept only on your phone.
		</li>
	</ul>

	<h2>What we keep</h2>
	<p>
		Reports of power, water and internet, and answers about what caused an outage, stay in the
		anonymous outage history, because they make up each suburb’s status and history. Once your
		account is deleted, they’re no longer connected to you. Feedback you sent us is kept as long as
		it helps us improve Glim.
	</p>
	<p>
		Glim is made by {COMPANY}. Our <a href={resolve('/privacy')}>privacy policy</a> explains what Glim
		keeps and why.
	</p>
</Prose>
