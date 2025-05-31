---
title: Test post
created: 2021-12-12
tags: ["svelte"]
---

<script lang="ts">
    import Counter from './test.svelte'
</script>

<div style="margin-top: 50px;">
  <Counter prop="hello world!"/>
  {#if 200 > 40}
    <p>True</p>
  {:else}
    <p>False</p>
  {/if}
</div>

{% youtube id="cQYLPhBmqG8" title="something" %}
{% youtube id="XBVujg6Fn3A" title="Master The Svelte Context API" %}
{% embed src="https://stackblitz.com/github/joysofcode/svelte-context-api?ctl=1&embed=1&file=src%2Froutes%2F%2Bpage.svelte&title=Svelte Context API" title="Svelte Context API" %}

# Contents

# ok lets try some markdown
- item 1
- item 2

[a link](https://google.com)
```python:hello.py
# fibonnacci sequence
def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)
```

# hello world

```ts:hello.ts twoslash
  function hi() {
    console.log('hi')
    alert('hi')
  }

  alert('hey world')
```
