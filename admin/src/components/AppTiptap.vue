<template>
  <div v-if="editor">
    <div class="control-group">
      <v-btn-toggle class="button-group heading-group" color="primary" borderless dense>
        <AppButton
          @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
        >
          H1
        </AppButton>
        <AppButton
          @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
        >
          H2
        </AppButton>
        <AppButton
          @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
        >
          H3
        </AppButton>
        <AppButton
          @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
        >
          H4
        </AppButton>
        <AppButton
          @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
        >
          H5
        </AppButton>
        <AppButton
          @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
        >
          H6
        </AppButton>
      </v-btn-toggle>

      <v-btn-toggle class="button-group" color="primary" borderless dense multiple>
        <AppButton
          @click="editor.chain().focus().toggleBold().run()"
          :class="{ 'is-active': editor.isActive('bold') }"
        >
          <AppIcon>mdi-format-bold</AppIcon>
        </AppButton>
        <AppButton
          @click="editor.chain().focus().toggleItalic().run()"
          :class="{ 'is-active': editor.isActive('italic') }"
        >
          <AppIcon>mdi-format-italic</AppIcon>
        </AppButton>
        <AppButton
          @click="editor.chain().focus().toggleUnderline().run()"
          :class="{ 'is-active': editor.isActive('underline') }"
        >
          <AppIcon>mdi-format-underline</AppIcon>
        </AppButton>
      </v-btn-toggle>

      <v-btn-toggle class="button-group" color="primary" borderless dense>
        <AppButton
          @click="editor.chain().focus().setTextAlign('left').run()"
          :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }"
        >
          <AppIcon>mdi-format-align-left</AppIcon>
        </AppButton>
        <AppButton
          @click="editor.chain().focus().setTextAlign('center').run()"
          :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }"
        >
          <AppIcon>mdi-format-align-center</AppIcon>
        </AppButton>
        <AppButton
          @click="editor.chain().focus().setTextAlign('right').run()"
          :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }"
        >
          <AppIcon>mdi-format-align-right</AppIcon>
        </AppButton>
        <AppButton
          @click="editor.chain().focus().setTextAlign('justify').run()"
          :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }"
        >
          <AppIcon>mdi-format-align-justify</AppIcon>
        </AppButton>
      </v-btn-toggle>

      <v-btn-toggle class="button-group" color="primary" borderless dense>
        <AppButton
          @click="editor.chain().focus().toggleBlockquote().run()"
          :class="{ 'is-active': editor.isActive('blockquote') }"
        >
          <AppIcon>mdi-format-quote-close</AppIcon>
        </AppButton>
      </v-btn-toggle>

      <v-btn-toggle class="button-group" color="primary" borderless dense>
        <AppButton
          @click="editor.chain().focus().toggleBulletList().run()"
          :class="{ 'is-active': editor.isActive('bulletList') }"
        >
          <AppIcon>mdi-format-list-bulleted</AppIcon>
        </AppButton>
      </v-btn-toggle>
    </div>
    <editor-content :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Placeholder from '@tiptap/extension-placeholder'

export default {
  components: {
    EditorContent
  },
  props: {
    value: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      editor: null
    }
  },
  watch: {
    value(value) {
      const isSame = this.editor.getHTML() === value

      if (isSame) {
        return
      }

      this.editor.commands.setContent(value, false)
    },
  },
  mounted() {
    this.editor = new Editor({
      content: this.value,
      extensions: [
        StarterKit,
        Underline.configure({}),
        TextAlign.configure({
          types: ['heading', 'paragraph']
        }),
        Placeholder.configure({
          placeholder: 'Write content here...'
        }),
      ],
      onUpdate: () => {
        this.$emit('input', this.editor.getHTML())
      }
    })
  },
  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>

<style>
.control-group {
  margin-bottom: 10px;
  display: flex;
  gap: 10px;
}

.control-group .heading-group .v-btn {
  font-size: 16px;
  font-weight: 600;
  color: rgba(0, 0, 0, 1);
}

.tiptap p.is-editor-empty:first-child::before {
  color: rgba(0, 0, 0, 0.6);
  content: attr(data-placeholder);
  float: left;
  height: 0;
  pointer-events: none;
}

.tiptap blockquote {
  border-left: 3px solid rgba(0, 0, 0, 0.38);
  margin: 1.5rem 0;
  padding-left: 1rem;
}

.ProseMirror {
  padding: 6px 12px 0 12px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.38);
  min-height: 12rem;
}
</style>
