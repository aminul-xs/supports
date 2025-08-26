import { useSelect } from '@wordpress/data';
import { applyFilters } from '@wordpress/hooks';

/**
 * Merge block attributes with dynamic controls + apply filters
 *
 * @param {string} blockName
 * @param {Object} metaAttributes - Block attributes from block.json
 * @param {Object} attributes - Current props.attributes
 * @returns {Object} merged attributes
 */
export function useBlockAttributesWithControls( blockName, metaAttributes, attributes ) {
    const controls = useSelect(
        ( select ) => select( 'supports/controls-store' )?.getBlockControls( blockName ) || {},
        [ blockName ]
    );

    let merged = {
        ...metaAttributes,
        ...controls,
        ...attributes,
    };

    // 🔑 allow plugins to extend attributes
    merged = applyFilters(
        'supports.blocks.attributes',
        merged,
        blockName
    );

    return merged;
}
