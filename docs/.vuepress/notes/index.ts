import { defineNotesConfig, defineNoteConfig } from 'vuepress-theme-plume'
import FeynmanIII from './feynman-iii.ts'

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    FeynmanIII,
  ]
})