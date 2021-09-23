import React from 'react'
import {
  createClient,
  createPortableTextComponent,
  createImageUrlBuilder,
  createPreviewSubscriptionHook
} from "next-sanity";
import BlockContent from "@sanity/block-content-to-react";

import { sanityConfig } from "./config";
import { Typography } from '../../../../shared';

if (!sanityConfig.projectId) {
  throw Error(
    "The Project ID is not set. Check your environment variables."
  );
}
export const urlFor = source =>
  createImageUrlBuilder(sanityConfig).image(source);

export const imageBuilder = source =>
  createImageUrlBuilder(sanityConfig).image(source);

export const usePreviewSubscription =
  createPreviewSubscriptionHook(sanityConfig);

  export const serializers = {
    types: {
      block: (props) => {
        const { style = "normal" } = props.node;

        if (style === 'normal') {
          return React.createElement(
            Typography,
            { as: `p` , variant: 'body'},
            props.children
          );
        }
  
        if (/^h\d/.test(style)) {
          const level = style.replace(/[^\d]/g, "");
          return React.createElement(
            Typography,
            { as: `h${level}` , variant: 'heading'},
            props.children
          );
        }
  
        if (style === "blockquote") {
          return <blockquote>- {props.children}</blockquote>;
        }
  
        // Fall back to default handling
        return BlockContent.defaultSerializers.types.block(props);
      },
      code: (props) =>
         (
          <pre data-language={props.node.language}>
            <code>{props.node.code}</code>
          </pre>
        )
    },
    list: (props) =>
      (props.type === "bullet" ? (
        <ul>{props.children}</ul>
      ) : (
        <ol>{props.children}</ol>
      )),
    listItem: (props) =>
      (props.type === "bullet" ? (
        <li>{props.children}</li>
      ) : (
        <li>{props.children}</li>
      )),
    marks: {
      strong: (props) =>
         <strong>{props.children}</strong>,
      em: (props) => <em>{props.children}</em>,
      code: (props) =>  <code>{props.children}</code>
    }
  };

// Set up Portable Text serialization
export const PortableText = createPortableTextComponent({
  ...sanityConfig,
  // Serializers passed to @sanity/block-content-to-react
  // (https://github.com/sanity-io/block-content-to-react)
  serializers
});


export const client = createClient(sanityConfig);

export const previewClient = createClient({
  ...sanityConfig,
  useCdn: false
});

export const getClient = usePreview =>
  usePreview ? previewClient : client;
export default client;