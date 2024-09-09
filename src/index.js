import { registerBlockType } from '@wordpress/blocks';
import { MediaUpload, MediaUploadCheck, RichText, BlockControls } from '@wordpress/block-editor';
import { Button, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { useState } from '@wordpress/element';

registerBlockType('mg/block-with-image', {
    title: 'Block with Image',
    icon: 'format-image',
    category: 'design',
    attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'p',
        },
        imageUrl: {
            type: 'string',
            default: null,
        },
        imageAlt: {
            type: 'string',
            default: '',
        },
    },
    edit({ attributes, setAttributes }) {
        const { content, imageUrl, imageAlt } = attributes;

        const onSelectImage = (media) => {
            setAttributes({
                imageUrl: media.url,
                imageAlt: media.alt,
            });
        };

        const removeImage = () => {
            setAttributes({
                imageUrl: null,
                imageAlt: '',
            });
        };

        return (
            <>
                <BlockControls>
                    {imageUrl && (
                        <ToolbarGroup>
                            <ToolbarButton onClick={removeImage}>
                                Remove Image
                            </ToolbarButton>
                        </ToolbarGroup>
                    )}
                </BlockControls>
                <div className="block-with-image">
                    <RichText
                        tagName="p"
                        value={content}
                        onChange={(content) => setAttributes({ content })}
                        placeholder="Enter text here..."
                    />
                    <div className="image-upload-wrapper">
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={onSelectImage}
                                allowedTypes={['image']}
                                value={imageUrl ? imageUrl : ''}
                                render={({ open }) => (
                                    !imageUrl ? (
                                        <Button onClick={open} className="button button-large">
                                            Upload Image
                                        </Button>
                                    ) : (
                                        <img src={imageUrl} alt={imageAlt} onClick={open} />
                                    )
                                )}
                            />
                        </MediaUploadCheck>
                    </div>
                </div>
            </>
        );
    },
    save({ attributes }) {
        const { content, imageUrl, imageAlt } = attributes;

        return (
            <div className="block-with-image">
                <RichText.Content tagName="p" value={content} />
                {imageUrl && <img src={imageUrl} alt={imageAlt} />}
            </div>
        );
    },
});
