<template>
  <section class="pa4">
    <div class="bg-white-90 pa4">
      <div class="f1">Nuxt TypeScript Starter</div>
      <div class="f3">test script: {{ selected }} {{ opened }}</div>
      <div class="f3">test script: {{ testFlag }}</div>
      <div class="f3">global test: {{ global }}</div>
      {{ selected }}
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { namespace } from 'vuex-class'

import * as plan from '~/store/modules/plan'

const Plan = namespace(plan.name)

@Component({
  components: {}
})
export default class IndexPage extends Vue {
  @Plan.State selected
  @Plan.State opened
  // @Provide() foo = 'foo'
  // @Provide('bar') baz = 'bar'

  // /** head() */
  // private head() {
  //   return { title: "タイトル" });
  // }

  // /** prop() */
  // @Prop() name: string = "なまえ";

  // /** data() */
  // private testFlag: string = 'test'

  // /** computed() */
  // public get isEmptyName(): boolean {
  //   return this.name === "";
  // }

  // /** methods() */
  // private toggleFlag(): void {
  //   this.flag = !this.flag;
  // }
}
</script>