<script lang="ts">
	import {dataStore} from './mongodbData.js'
	import { file } from './modals/messageModal.js'
	// gets the data objects from the database and reassigns them to listData
	export let data: any

    $: if (data) {
        dataStore.set(data?.body?.events);
		if (data?.body?.name === null) {
			file.set({fileName: 'No File'})
		} else {
			file.set(data?.body?.name)
		}
    }

	// $: {
	// 	console.log(data?.body?.name)
	// 	console.log(data?.body?.events)
	// }
	


	// $: console.log(data?.body)

	import Calendar from './calendar/+page.svelte'
	import AddClass from './addClass/+page.svelte'
	import ImportCSV from './importCSV/+page.svelte'
	import ProgressModal from './modals/progressModal.svelte'

	// function handleMessage(event) {
	// 	alert(event.detail.text)
	// }

	let addClassModal = false
	let importCSVModal = false

	function toggleModal() {
		addClassModal = !addClassModal
	}

	function toggleImportModal() {
		importCSVModal = !importCSVModal
	}


</script>

<div class="">
	<ProgressModal on:closeCSV={toggleImportModal}/>
</div>

<div class="bg-gray-100 static">
	{#if addClassModal}
		<div class="z-10 absolute right-4 left-4">
			<AddClass on:closeModal={toggleModal}/>
		</div>
	{/if}

	{#if importCSVModal}
		<div class="z-10 absolute h-screen w-full">
			<ImportCSV on:closeCSVModal={toggleImportModal} />
		</div>
	{/if}

	<div class="p-4">
		<div class="flex justify-center md:justify-end gap-8">
			<div class="px-1">
				<button class="fa-solid fa-file-import text-primary text-3xl pl-2 hover:translate-y-[-4px] transition-all duration-200" on:click={toggleImportModal}></button>
				<!-- <img src="upload.svg" alt="upload icon" class="w-10 h-10"> -->
				<h1 class="font-bold text-primary">Import</h1>
			</div>

			<div class="px-1">
				<button class="fa-solid fa-circle-plus text-primary text-3xl hover:translate-y-[-4px] hover:shadow-gray-400 transition-all duration-200" on:click={toggleModal}></button>
				<!-- <img src="add.svg" alt="Plus button called add" class="w-10 h-10"> -->
				<h1 class="font-bold text-primary">Add</h1>
			</div>
			
			<div class="px-1">
				<button class="fa-solid fa-print text-primary text-3xl pl-1 hover:translate-y-[-4px] hover:shadow-gray-400 transition-all duration-200"></button>
				<h1 class="font-bold text-primary">Print</h1>
			</div>
			
			<div class="px-1">
				<button class="fa-solid fa-file-export text-primary text-3xl pl-2 hover:translate-y-[-4px] hover:shadow-gray-400 transition-all duration-200"></button>
				<!-- <img src="export.svg" alt="export icon" class="w-10 h-10"> -->
				<h1 class="font-bold text-primary">Export</h1>
			</div>
			
		</div>
		
		<div class="calendar">
			<!-- listData from the database gets passed down as a prop to the scheduler -->
			<Calendar />
		</div>
	</div>
</div>