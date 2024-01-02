include $(MKPM)/mkpm
DOTENV ?= $(PROJECT_ROOT)/.env
include $(MKPM)/gnu
include $(MKPM)/envcache
include $(MKPM)/dotenv
include $(MKPM)/chain
include $(MKPM)/yarn
include ../../shared.mk

export SB_RN_GET_STORIES ?= $(call yarn_binary,sb-rn-get-stories)
export STORYBOOK_ENABLED=true

ACTIONS += deps ##
$(ACTION)/deps: $(PROJECT_ROOT)/package.json package.json
ifneq (,$(SUBPROC))
	@$(MAKE) -C $(PROJECT_ROOT) \~deps ARGS=$(ARGS)
else
	@$(YARN) workspaces focus $(ARGS)
endif
	@$(call done, $@)

ACTIONS += generate~deps ##
.storybook/storybook.requires.js:
	@$(call reset,generate)
$(ACTION)/generate: .storybook/storybook.requires.js $(call git_deps,\.([jt]sx?)$$)
	@$(SB_RN_GET_STORIES) --config-path $(CURDIR)/.storybook
	$(SED) -i \
		's|import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";|const argsEnhancers=[]|g' \
		.storybook/storybook.requires.js
	@$(call done, $@)

ACTIONS += format~generate ##
$(ACTION)/format: $(call git_deps,\.((json)|(md)|([jt]sx?))$$)
#	-@$(call eslint_format,$?)
	-@$(call prettier,$?,$(ARGS))
	@$(call done, $@)

ACTIONS += spellcheck~format ##
$(ACTION)/spellcheck: $(call git_deps,\.(md)$$)
	-@$(call cspell,$?,$(ARGS))
	@$(call done, $@)

ACTIONS += lint~spellcheck ##
$(ACTION)/lint: $(call git_deps,\.([jt]sx?)$$)
	-@$(call eslint,$?,$(ARGS))
	@$(call done, $@)

ACTIONS += test~lint ##
$(ACTION)/test: $(call git_deps,\.([jt]sx?)$$)
	-@$(call jest,$?,$(ARGS))
	@$(call done, $@)

EXPO_PORT ?= 8081
.PHONY: dev +dev
dev: | ~generate +dev ##
+dev:
	@$(EXPO) start -c -p $(EXPO_PORT) $(ARGS)

.PHONY: start@web +start@web
start@web: | ~deps +start@web ##
+start@web: +generate
	@$(EXPO) start -c -p $(EXPO_PORT) --web $(ARGS)

.PHONY: start@android +start@android
start@android: | ~generate +start@android ##
+start@android:
	@$(EXPO) start -c -p $(EXPO_PORT) --android $(ARGS)

.PHONY: start@ios +start@ios
start@ios: | ~generate start@ios ##
+start@ios:
	@$(EXPO) start -c -p $(EXPO_PORT) --ios $(ARGS)

.PHONY: clean
clean: ##
	-@$(MKCACHE_CLEAN)
	-@$(JEST) --clearCache $(NOFAIL)
	-@$(WATCHMAN) watch-del-all $(NOFAIL)
	-@$(GIT) clean -fXd \
		$(MKPM_GIT_CLEAN_FLAGS) \
		$(YARN_GIT_CLEAN_FLAGS) \
		$(NOFAIL)

CACHE_ENVS += \

-include $(call chain)
