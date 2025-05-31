<script lang="ts">
	let counter = $state(100);

	let { prop } = $props();
</script>

<p>Hello world! {prop}</p>
<button onclick={() => (counter += 1)}>Counter: {counter}</button>
