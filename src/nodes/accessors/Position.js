import { attribute } from '../core/AttributeNode.js';
import { modelWorldMatrix, modelViewMatrix } from './ModelNode.js';

/** @module Position **/

/**
 * TSL object that represents the position attribute of the current rendered object.
 *
 * @type {AttributeNode<vec3>}
 */
export const positionGeometry = /*@__PURE__*/ attribute( 'position', 'vec3' );

/**
 * TSL object that represents the vertex position in local space of the current rendered object.
 *
 * @type {AttributeNode<vec3>}
 */
export const positionLocal = /*@__PURE__*/ positionGeometry.varying( 'positionLocal' );

/**
 * TSL object that represents the previous vertex position in local space of the current rendered object.
 * Used in context of {@link VelocityNode} for rendering motion vectors.
 *
 * @type {AttributeNode<vec3>}
 */
export const positionPrevious = /*@__PURE__*/ positionGeometry.varying( 'positionPrevious' );

/**
 * TSL object that represents the vertex position in world space of the current rendered object.
 *
 * @type {VaryingNode<vec3>}
 */
export const positionWorld = /*@__PURE__*/ modelWorldMatrix.mul( positionLocal ).xyz.varying( 'v_positionWorld' );

/**
 * TSL object that represents the position world direction of the current rendered object.
 *
 * @type {Node<vec3>}
 */
export const positionWorldDirection = /*@__PURE__*/ positionLocal.transformDirection( modelWorldMatrix ).varying( 'v_positionWorldDirection' ).normalize().toVar( 'positionWorldDirection' );

/**
 * TSL object that represents the vertex position in view space of the current rendered object.
 *
 * @type {VaryingNode<vec3>}
 */
export const positionView = /*@__PURE__*/ modelViewMatrix.mul( positionLocal ).xyz.varying( 'v_positionView' );

/**
 * TSL object that represents the position view direction of the current rendered object.
 *
 * @type {VaryingNode<vec3>}
 */
export const positionViewDirection = /*@__PURE__*/ positionView.negate().varying( 'v_positionViewDirection' ).normalize().toVar( 'positionViewDirection' );
