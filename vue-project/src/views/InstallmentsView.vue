<template>
    <div class="v-input my-custom-input">
      <input v-model="search" class="v-input__control" placeholder="Search">
      <span class="v-input__append-inner">
        <v-icon>mdi-magnify</v-icon>
      </span>
    </div>
  </template>
  
  <style>
  .my-custom-input {
    display: flex;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.26);
    border-radius: 4px;
    padding: 4px;
    height: 36px;
  }
  
  .my-custom-input input {
    border: none;
    outline: none;
    flex-grow: 1;
    padding: 4px 8px;
  }
  
  .my-custom-input .v-icon {
    margin-right: 4px;
  }
  </style>
  