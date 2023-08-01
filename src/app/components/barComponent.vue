<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <q-toolbar class="bg-grey-10">
                <q-toolbar-title class="text-center">Tasks list</q-toolbar-title>
            </q-toolbar>
        </q-header>
        <q-page-container>
            <div class="q-mt-xl ">
                <div class="all-content ">
                    <slot/>
                </div>
            </div>
        </q-page-container>

    </q-layout>
</template>
<style scoped>
.all-content{
    width: 100%;
    min-height: 93vh;
}
</style>