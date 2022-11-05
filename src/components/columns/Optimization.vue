<template>
  <div id="optimization">
    <div id="header">
      <div id="left">
        <img
          :src="commit.author.avatar_url"
          :alt="`${commit.author.login}'s avatar'`"
          draggable="false"
        />
        <a id="author" :href="commit.author.html_url" target="_blank">{{
          commit.author.login
        }}</a>
        <a id="commit" :href="commit.html_url" target="_blank">{{
          commit.commit.message
        }}</a>
      </div>
      <p>
        Latest commit
        <a :href="commit.html_url" target="_blank">
          {{ commit.sha.slice(0, 7) }}
        </a>
        on
        {{
          new Date(commit.commit.author.date).toLocaleDateString("en-us", {
            month: "short",
            day: "numeric",
          })
        }}
      </p>
    </div>
    <div id="content">
      <h1>{{ store.state.selectedOptimization.DisplayName }}</h1>
      <p>{{ store.state.selectedOptimization.Description }}</p>

      <h2>Parameters</h2>
      <div
        class="parameter string-drop-down"
        v-for="parameter in store.state.selectedOptimization.Parameters.filter(
          (p) => p.ParameterType === 'string' && Array.isArray(p.ValidValues)
        )"
      >
        <label>
          {{ parameter.Name }}
          <span class="required">{{ parameter.IsMandatory ? "*" : "" }}</span>
        </label>
        <select>
          <option
            v-for="validValue in parameter.ValidValues"
            :value="validValue"
          >
            {{ validValue }}
          </option>
        </select>
      </div>
      <div
        class="parameter string"
        v-for="parameter in store.state.selectedOptimization.Parameters.filter(
          (p) => p.ParameterType === 'string' && !Array.isArray(p.ValidValues)
        )"
      >
        <label>
          {{ parameter.Name }}
          <span class="required">{{ parameter.IsMandatory ? "*" : "" }}</span>
        </label>
        <input type="text" />
      </div>
      <div
        class="parameter switch"
        v-for="parameter in store.state.selectedOptimization.Parameters.filter(
          (p) => p.ParameterType === 'switch'
        )"
      >
        <label>
          {{ parameter.Name }}
          <span class="required">{{ parameter.IsMandatory ? "*" : "" }}</span>
        </label>
        <input type="checkbox" />
      </div>
      <i><span class="required">*</span> Required field</i>
    </div>
  </div>
</template>

<script lang="ts" setup>
import store from "@/store";
import { Commit } from "@/types";
import { ref, watch } from "vue";

async function getLatestCommitInfo() {
  const params = new URLSearchParams({
    path: store.state.selectedOptimization.FilePath,
  });

  const response = await fetch(
    `https://api.github.com/repos/couleur-tweak-tips/TweakList/commits?${params.toString()}`
  );
  const data = await response.json();

  return data[0];
}

const commit = ref<Commit>(await getLatestCommitInfo());

watch(
  () => store.state.selectedOptimization,
  async (v) => {
    commit.value = await getLatestCommitInfo();
  }
);
</script>

<style scoped>
div#optimization {
  border-left: var(--border);
  background-color: #010409;
}

div#header {
  width: 100%;
  padding: 16px;
  background-color: #161b22;
  border: var(--border);
  border-left: none;
  box-sizing: border-box;
  border-radius: 0 0 6px 6px;
  display: flex;
  justify-content: space-between;
}

a {
  color: #c9d1d9;
  font-size: 14px;
  transition: color 0.1s ease-in;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
  color: #58a6ff;
}

div#left {
  display: flex;
  align-items: center;
  gap: 10px;
}

div#left > img {
  width: 24px;
  height: 24px;
  border-radius: 100%;
}

div#left > a#author {
  font-weight: 600;
}

div#left > a#commit {
  color: #8b949e;
}

div#left > a#commit:hover {
  text-decoration: underline;
  color: #58a6ff;
}

div#header > p {
  font-size: 14px;
  color: #8b949e;
}

div#header > p > a {
  color: #8b949e;
}

div#header > p > a:hover {
  color: #58a6ff;
}

div#content {
  padding: 20px;
}

div#content > i {
  color: #c1d1d9;
  font-size: 12px;
}

div.parameter {
  height: 28px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  gap: 5px;
}

div.parameter > label {
  font-size: 14px;
  color: #c1d1d9;
  margin-right: 5px;
  transform: translateY(-1px);
}

span.required {
  color: #f08080;
}

div.string-drop-down > select {
  background-color: #0d1117;
  border-radius: 6px;
  border: var(--border);
  padding: 5px 24px 5px 12px;
  font-size: 14px;
  color: #c1d1d9;
}

div.string-drop-down > select:focus {
  outline: #58a6ff solid 1px;
}

div.string > input {
  background-color: #0d1117;
  border-radius: 6px;
  border: var(--border);
  padding: 5px 24px 5px 12px;
  font-size: 14px;
  color: #c1d1d9;
}

div.string > input:focus {
  outline: #58a6ff solid 1px;
}
</style>
