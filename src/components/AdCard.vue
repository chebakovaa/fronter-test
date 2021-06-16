<template>
  <div class="ad-card">
    <div class="ad-card__title">{{title}}</div>
    <div class="ad-card__flat">
      <div v-for="(item, index) in description" :key="index">{{item}}</div>
    </div>
    <div class="ad-card__flat">
      <div v-for="(item, index) in address" :key="index">{{item}}</div>
    </div>
    <div class="ad-card__flat">
      <div v-for="(item, index) in agent" :key="index">{{item}}</div>
    </div>
    <div class="ad-card__tools">
      <div class="ad-card__like"  @click="likeClick">
        <img  src="../assets/pre-like.svg" />
      </div>
    </div>
  </div>
</template>

<style scoped>

@media all and (max-width: 10em), all and (max-height: 10em){
  
  .ad-card__title {
    font-size: 1em;
  }
  
  .ad-card__flat{
    font-size: 0.5em;
  }
}
.ad-card__title {
  font-size: 2em;
  white-space:pre;
  padding-bottom: 1.5vh;
}

.ad-card__tools {
  height: 0.5em;
  width: 100%;
  padding-top: 1.5vh;
}

.ad-card {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: stretch;
  border: thick double black;
  padding: 1vw;
}

.ad-card__flat{
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-center;
  font-size: 1.5em;
  align-content: flex-start;
  white-space:pre;
}

.ad-card__like{
  width: 1.5em;  
  height: 100%;  
  display: block;
  text-align: center;
}

.ad-card__like:hover{
   cursor: pointer;
} 

</style>

<script lang="ts">
import { Prop, Vue } from "vue-property-decorator";
import { IOffer } from "@/model/IOffer";
import store from "@/store";

export default class AdCard extends Vue {

  public get title(): string {
    return `No.${this.offer?.id}          ${this.offer?.attributes.title} `;
  }

  public get description(): string[] {
    return [
      'Area:'
      ,`${this.offer?.attributes.area} ${this.offer?.attributes.unit}`
      ,'Rooms:'
      , `${this.offer?.attributes.rooms}`
    ].map(v => v + "  ");
  }

  public get address(): string[] {
    return [
      'Address:'
      , `${this.offer?.attributes.address.house}  ${this.offer?.attributes.address.street}  ${this.offer?.attributes.address.room}`
      ,this.offer?.attributes.address.city
    ].map(v => v + "  ");
  }

  public get agent(): string[] {
    return [
      'The contact person:'
      ,this.offer?.relationships.attributes.first_name
      ,this.offer?.relationships.attributes.middle_name
      ,this.offer?.relationships.attributes.last_name
    ].map(v => v + "  ");
  }

  @Prop()
  readonly offer!: IOffer;

  likeClick() {
    store.dispatch('changeLike', {offerId: this.offer.id});
  }

}
</script>