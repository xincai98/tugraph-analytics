/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import request from "./request";
import { HTTP_SERVICE_URL } from "../../constants";
import { message } from "antd";
import $i18n from "@/components/i18n";

interface GraphDefinitionParams {
  instanceName: string;
  page?: number;
  name?: string;
}

/**
 * GraphView
 */
export const getGraphDefinitionList = async (params: GraphDefinitionParams) => {
  const { instanceName, ...others } = params;
  console.log(others);
  const response = await request(
    `${HTTP_SERVICE_URL}/api/instances/${instanceName}/graphs`,
    {
      method: "get",
      params: others,
    }
  );

  if (!response?.success || !response?.data) {
    // message.error(`搜索失败: ${response?.message}`);
    return [];
  }
  return response.data?.list || [response.data];
};

/**
 * 图删除
 */
export const deleteGraphDefinition = async (
  instanceName: string,
  graphName: string
) => {
  const response = await request(
    `${HTTP_SERVICE_URL}/api/instances/${instanceName}/graphs/${graphName}`,
    {
      method: "delete",
    }
  );

  if (!response?.success) {
    message.error(
      $i18n.get(
        {
          id: "openpiece-geaflow.geaflow.services.function-manage.FailedToDeleteResponsemessage",
          dm: "删除失败：{responseMessage}",
        },
        { responseMessage: response?.message }
      )
    );
    return [];
  }
  return response;
};

/**
 * 清空图数据
 */
export const cleanGraphData = async (
    instanceName: string,
    graphName: string
) => {
  const response = await request(
      `${HTTP_SERVICE_URL}/api/instances/${instanceName}/graphs/${graphName}/clean`,
      {
        method: "POST",
      }
  );

  if (!response?.success) {
    message.error(
        $i18n.get(
            {
              id: "openpiece-geaflow.geaflow.services.function-manage.FailedToDeleteResponsemessage",
              dm: "清空失败：{responseMessage}",
            },
            { responseMessage: response?.message }
        )
    );
    return [];
  }
  return response;
};

/**
 * 获取插件类型
 * @param type 类型名称
 * @returns
 */
export const getPluginCategoriesByType = (type: string) => {
  return request(
    `${HTTP_SERVICE_URL}/api/config/plugin/categories/${type}/types`,
    {
      method: "GET",
    }
  );
};

export const getPluginCategoriesConfig = (type: string, value: string) => {
  return request(
    `${HTTP_SERVICE_URL}/api/config/plugin/categories/${type}/types/${value}`,
    {
      method: "GET",
    }
  );
};

interface CreateGraphField {
  fields: {
    category: string;
    name: string;
    type: string;
    comment: string;
  }[];
  name: string;
  type: string;
}

interface CrateGraphParams {
  name: string;
  edges: CreateGraphField[];
  vertices: CreateGraphField[];
  pluginConfig: {
    type: string;
    config: any;
  };
}

/**
 * 创建图定义
 * @param instanceName 实例名称
 * @param params 创建图的参数
 * @returns
 */
export const createGraphDefinition = (instanceName: string, params: any) => {
  return request(`${HTTP_SERVICE_URL}/api/instances/${instanceName}/graphs`, {
    method: "POST",
    data: params,
  });
};

/**
 * 创建图定义
 * @param instanceName 实例名称
 * @param params 创建图的参数
 * @returns
 */
export const updateGraphDefinition = (
  instanceName: string,
  graphName: string,
  params: any
) => {
  return request(
    `${HTTP_SERVICE_URL}/api/instances/${instanceName}/graphs/${graphName}`,
    {
      method: "PUT",
      data: params,
    }
  );
};

export const graphDetail = (instanceName: string, graphName: string) => {
  return request(
    `${HTTP_SERVICE_URL}/api/instances/${instanceName}/graphs/${graphName}`,
    {
      method: "get",
    }
  );
};
