/*
 * Copyright 2023 AntGroup CO., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 */

package com.antgroup.geaflow.console.core.model.job.config;

import com.antgroup.geaflow.console.core.model.config.ConfigValueBehavior;
import com.antgroup.geaflow.console.core.model.config.GeaflowConfigClass;
import com.antgroup.geaflow.console.core.model.config.GeaflowConfigKey;
import com.antgroup.geaflow.console.core.model.config.GeaflowConfigValue;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RayClientArgsClass extends GeaflowConfigClass {

    @GeaflowConfigKey(value = "ray.user.class.args", comment = "i18n.key.engine.params.json")
    @GeaflowConfigValue(required = true, behavior = ConfigValueBehavior.JSON)
    private GeaflowArgsClass geaflowArgs;

    @GeaflowConfigKey(value = "ray.user.main.class", comment = "i18n.key.main.class")
    @GeaflowConfigValue(required = true)
    private String mainClass;

    public RayClientArgsClass(GeaflowArgsClass geaflowArgs, String mainClass) {
        this.geaflowArgs = geaflowArgs;
        this.mainClass = mainClass;
    }
}