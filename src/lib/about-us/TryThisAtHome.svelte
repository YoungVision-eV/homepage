<script>
	import Button from '$lib/components/Button.svelte';
</script>

<section
	class="flex flex-col items-center bg-yellow-500 px-5 py-10 lg:flex-row lg:items-end lg:gap-x-28 lg:pb-14 lg:pl-20 lg:pr-40"
>
	<h2 class="text-center font-serif text-2xl font-bold lg:hidden lg:text-left lg:text-4xl">
		Probier’s mit deinen Freunden aus!
	</h2>
	<div class="mt-10 h-60 w-60 flex-shrink-0 lg:mt-0">
		<enhanced:img class="h-full w-full object-cover" src="$lib/assets/triaden-thumbnail.jpeg" />
	</div>
	<div>
		<h2 class="hidden text-center font-serif text-2xl font-bold lg:block lg:text-left lg:text-4xl">
			Probier’s mit deinen Freunden aus!
		</h2>
		<p class="mt-10 text-sm lg:mt-9">
			Triaden sind eine tolle und leichte Übung, die du einfach mit deinen Freunden zuhause
			ausprobieren kannst! Lade dir dafür einfach die kostenlose PDF-Datei runter.
		</p>
		<div class="mt-7 text-center lg:text-left">
			<Button
				color="dark"
				text="Runterladen"
				href="/downloads/Triaden+zuhause.pdf"
				download="Triaden zuhause.pdf"
			/>
		</div>
	</div>
</section>
